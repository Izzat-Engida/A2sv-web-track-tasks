import { useState } from "react";

interface Props {
  OnAdd: (data: string) => void;
}

function Add({ OnAdd }: Props) {
  const [info, SetInfo] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (info.length > 0) {
      OnAdd(info);
      SetInfo('');
    }
  };

  return (
    <>
      <input
        type="text"
        value={info}
        onChange={(e) => SetInfo(e.target.value)}
      />
      <div></div>
      <button onClick={handleClick}>add</button>
    </>
  );
}

export default Add;
