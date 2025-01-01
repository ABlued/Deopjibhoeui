import { History } from '../types/History';
import {
  MinimumTransaction,
  SortedMembersToPay,
  TransactionDetail
} from '../types/MinimumTransaction';

export const calculateMinimumTransaction = ({
  expense,
  members
}: {
  expense: History[];
  members: string[];
}) => {
  if (members.length === 0 || expense.length === 0) return [];
  const mountPerPerson = calculateMountPerPerson(expense, members);
  if (mountPerPerson === 0) return [];

  // 1. 사람별로 냈어야 할 금액 계산
  let membersToPay: TransactionDetail = calculateMembersToPay(
    members,
    mountPerPerson
  );

  // 2. 사람별로 내야 할 금액 업데이트
  membersToPay = updateMembersToPay(expense, membersToPay);

  // 3. 사람별로 내야 할 금액 정렬
  const sortedMembersToPay: SortedMembersToPay = sortMembersToPay(membersToPay);

  // 4. 누가 누구에게 얼마를 보내야 하는지 계산
  return calculateTransaction(sortedMembersToPay);
};

export const calculateMountPerPerson = (
  expense: History[],
  members: string[]
) => {
  return Math.round(
    expense.reduce((acc, cur) => acc + cur.cost, 0) / members.length
  );
};

const calculateMembersToPay = (members: string[], mountPerPerson: number) => {
  return members.reduce((acc, cur) => {
    acc[cur] = mountPerPerson;
    return acc;
  }, {} as TransactionDetail);
};

const updateMembersToPay = (
  expense: History[],
  membersToPay: TransactionDetail
): TransactionDetail => {
  return expense.reduce((acc, cur) => {
    acc[cur.buyer] -= cur.cost;
    return acc;
  }, membersToPay);
};

const sortMembersToPay = (membersToPay: TransactionDetail) => {
  return Object.keys(membersToPay)
    .map((member) => ({
      member,
      amount: membersToPay[member]
    }))
    .sort((a, b) => a.amount - b.amount);
};

const calculateTransaction = (sortedMembersToPay: SortedMembersToPay) => {
  const minimumTransaction: MinimumTransaction[] = [];
  let leftIndex = 0;
  let rightIndex = sortedMembersToPay.length - 1;

  while (leftIndex < rightIndex) {
    while (
      leftIndex < rightIndex &&
      sortedMembersToPay[leftIndex].amount === 0
    ) {
      leftIndex++;
    }
    while (
      leftIndex < rightIndex &&
      sortedMembersToPay[rightIndex].amount === 0
    ) {
      rightIndex--;
    }
    if (leftIndex >= rightIndex) break;
    const toReceive = sortedMembersToPay[leftIndex];
    const toSend = sortedMembersToPay[rightIndex];

    const amountToReceive = Math.abs(toReceive.amount);
    const amountToSend = Math.abs(toSend.amount);

    if (amountToSend > amountToReceive) {
      minimumTransaction.push({
        sender: toSend.member,
        receiver: toReceive.member,
        amount: Number(amountToReceive.toFixed(2))
      });

      toReceive.amount = 0;
      toSend.amount -= toReceive.amount;
      leftIndex++;
    } else {
      minimumTransaction.push({
        sender: toSend.member,
        receiver: toReceive.member,
        amount: Number(amountToSend.toFixed(2))
      });

      toReceive.amount += toSend.amount;
      toSend.amount = 0;
      rightIndex--;
    }
  }
  return minimumTransaction;
};
