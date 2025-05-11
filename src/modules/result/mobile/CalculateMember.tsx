import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import { ResultSectionBox } from './components/InfoBox';
import { SectionTitle } from './components/SectionTitle';
import { v4 as uuid } from 'uuid';

function CalculateMember() {
  const { names } = useFriendsNameStore();

  return (
    <ResultSectionBox>
      <SectionTitle title="정산할 사람들" />
      <ul className="mt-[6px] ml-[1.2rem]">
        {names.map((name) => (
          <li
            key={uuid()}
            className="list-disc truncate-text text-[1rem] font-bold"
          >
            {`👤 ${name}`}
          </li>
        ))}
      </ul>
    </ResultSectionBox>
  );
}

export default CalculateMember;
