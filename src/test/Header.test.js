import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "../component/Header/Header";

describe("testing Header", () => {
  let container = null;
  let score;
  beforeEach(() => {
    score = 30;
    container = document.createElement("div");
    document.body.append(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    score = null;
  });

  test("render logo", () => {
    act(() => {
      render(<Header />, container);
    });
    expect(container.querySelector("div.header_logo")).not.toBeNull();
  });

  const scores = [1, 2, 3, 4, 5];
  test.each(scores)("render score", (score) => {
    act(() => {
      render(<Header score={score} />, container);
    });
    expect(container.querySelector("div.header_score").textContent).toBe(
      `Score: ${score}`
    );
  });

  describe("render categories", () => {
    beforeEach(() => {
      score = 30;
      act(() => {
        render(<Header score={score} />, container);
      });
    });

    test("render list", () => {
      expect(container.querySelector("ul.header_categories")).not.toBeNull();
    });

    test("list includes 6 categories", () => {});
    expect(
      container.querySelector("ul.header_categories").childrenNode.length
    ).toEqual(6);
  });
});
