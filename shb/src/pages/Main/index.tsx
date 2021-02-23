import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState
} from "react";

import Input from "../../components/Common/Input";

const Main = () => {
  const [name, setName] = useState<string>("");

  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  return (
    <>
      <Input isAct={false}>
        <label htmlFor="">이름</label>
        <div>
          <input type="text" value={name} onChange={e => handleChangeName(e)} />
          <button>인증번호</button>
        </div>
      </Input>
    </>
  );
};

export default Main;
