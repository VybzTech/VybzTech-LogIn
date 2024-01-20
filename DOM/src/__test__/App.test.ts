import { describe, expect, it } from "vitest";
import App from "../App";
describe("App Component", () => {
  it("Should render App", () => {
    expect(App()).not.toBeUndefined;
  });
});
