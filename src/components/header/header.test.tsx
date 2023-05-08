import { describe, expect, it } from "vitest";
import TestRenderer from "react-test-renderer";
import { Bell, Gear, PersonFill } from "react-bootstrap-icons";
import { Header } from "./index";

describe("Header Component", () => {
  it("should render correctly", () => {
    const tree = TestRenderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the logo", () => {
    const tree = TestRenderer.create(<Header />);
    const logo = tree.root.findByType("img");
    expect(logo.props.alt).toBe("Logo");
  });

  it("renders the notifications icon", () => {
    const tree = TestRenderer.create(<Header />);
    const notificationsIcon = tree.root.findByType(Bell);
    expect(notificationsIcon.props.size).toBe(16);
  });

  it("renders the settings icon", () => {
    const tree = TestRenderer.create(<Header />);
    const notificationsIcon = tree.root.findByType(Gear);
    expect(notificationsIcon.props.size).toBe(16);
  });

  it("renders the user icon", () => {
    const tree = TestRenderer.create(<Header />);
    const button = tree.root.findByType("button");
    const roundedFull = button.findByType("div");
    const userIcon = roundedFull.findByType(PersonFill);

    expect(button.props.className).toBe(
      "p-1 group flex shrink-0 items-center justify-center rounded-full transition text-blue-400 shadow-sm hover:text-blue-500 border-2 border-blue-600"
    );
    expect(userIcon.props.size).toBe(20);
  });
});
