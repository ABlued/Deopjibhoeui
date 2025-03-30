import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import { ResultSectionBox } from './components/InfoBox';

function CalculateMember() {
  const { names } = useFriendsNameStore();

  return (
    <ResultSectionBox className="p-[0.8rem] w-[100%]">
      <p className="text-[1.2rem] font-bold">정산할 사람들</p>
      <ul className="mt-[6px] ml-[1.2rem]">
        {names.map((name) => (
          <li
            key={name}
            className="list-disc truncate-text text-[1.2rem] font-bold"
          >
            {`👤 ${name}`}
          </li>
        ))}
      </ul>
    </ResultSectionBox>
  );
}

export default CalculateMember;
