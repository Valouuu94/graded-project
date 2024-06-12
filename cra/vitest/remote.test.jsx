import React from "react";
import { expect,describe,it } from "vitest";
import Button from "../remote/src/Button";
import Header from "../shared/src/components/Header";
import { render,screen,act } from '@testing-library/react';


describe('Component tests', async () => {
    it('button test', async () => {
        await act(async () => {render(<Button />);})
        const buttonElement = screen.getByText("Hello from remote");
        expect(buttonElement).toHaveProperty("innerHTML","Hello from remote")
    }),
    it('header test', async () => {
        await act(async () => {render(<Header />);})
        const buttonElement = screen.getByText("OSHIETE OSHIETE O SONO SHIKU MI WO");
        expect(buttonElement).toHaveProperty("innerHTML","OSHIETE OSHIETE O SONO SHIKU MI WO")
    })
});