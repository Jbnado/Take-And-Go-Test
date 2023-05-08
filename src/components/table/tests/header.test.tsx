import TestRenderer from "react-test-renderer";
import { fn } from "jest-mock";
import { describe, it, expect } from "vitest";
import { TableHeader } from "../header";

describe("TableHeader Component", () => {
  it("renders correctly with title", () => {
    const tree = TestRenderer.create(
      <TableHeader title="Test Title" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with search input", () => {
    const tree = TestRenderer.create(
      <TableHeader title="Test Title" onSearch={fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
