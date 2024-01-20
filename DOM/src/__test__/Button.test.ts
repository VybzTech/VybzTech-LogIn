import btn from "../Components/Button";
import { describe, it, expect } from "vitest";

describe("Default Btn", () => {
  it("Button shows", () => {
    // console.log(btn);
   
    expect(btn).toBeTruthy;
  });
});
