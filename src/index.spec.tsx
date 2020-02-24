/* eslint-disable @typescript-eslint/no-explicit-any */
import * as index from "./index";

test("Should not export default", () => {
  expect((index as any).default).toBeUndefined();
});
