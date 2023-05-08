import TestRenderer from "react-test-renderer";
import { describe, it, expect } from "vitest";
import { Sidenav } from "./index";
import { ChevronLeft } from "react-bootstrap-icons";

const renderComponent = (props = {}) =>
  TestRenderer.create(<Sidenav {...props} />);

describe("Sidenav Component", () => {
  it("renders correctly when open", () => {
    const tree = renderComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when closed", () => {
    const tree = renderComponent({ isOpen: false }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("changes state on click", async () => {
    const component = renderComponent();
    const waitAanimation = await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    it("should start opened", () => {
      const aside = component.root.findByType("aside");
      expect(aside.props.className).toContain("w-64");
    });

    it("should close on click", async () => {
      const chevron = component.root.findByType(ChevronLeft);
      chevron.props.onClick();
      await waitAanimation;
      const aside = component.root.findByType("aside");
      expect(aside.props.className).toContain("w-20");
    });

    it("should open on click", async () => {
      const chevron = component.root.findByType(ChevronLeft);
      chevron.props.onClick();
      await waitAanimation;
      const aside = component.root.findByType("aside");
      expect(aside.props.className).toContain("w-64");
    });
  });
});
