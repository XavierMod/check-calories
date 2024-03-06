import { useState } from "react";
import "./font.css";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #2b2e3f;
  color: white;
  flex-direction: column;
  gap: 1.3rem;
  padding-top: 5rem;
`;

const Input = styled.input`
  background-color: #0a0b0f;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 1rem;
  text-align: center;
  max-width: 5rem;
`;

const Result = styled.div`
  font-weight: bold;
  font-size: 2.3rem;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

function App() {
  const [baseGrams, setBaseGrams] = useState(100);
  const [baseCalories, setBaseCalories] = useState(null);
  const [desiredGrams, setDesiredGrams] = useState(null);
  const calculateCalories = () => (baseCalories * desiredGrams) / baseGrams;

  return (
    <Wrapper>
      <div>Result:</div>
      <Result>{Math.round(calculateCalories())} kcal</Result>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Group>
          <Input
            value={baseGrams}
            onChange={(e) => setBaseGrams(e.target.value)}
            placeholder="Grams"
          />
          <span>grams</span>
        </Group>

        <Group>
          <Input
            value={baseCalories}
            onChange={(e) => setBaseCalories(e.target.value)}
            placeholder="Kcal"
          />
          <span>kcal</span>
        </Group>
        <Group>
          <Input
            value={desiredGrams}
            onChange={(e) => setDesiredGrams(e.target.value)}
            placeholder="Grams"
          />
          <span>grams</span>
        </Group>
      </div>
    </Wrapper>
  );
}

export default App;
