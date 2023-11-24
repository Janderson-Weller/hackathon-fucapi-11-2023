import { CButton, CCol, CContainer, CFormLabel, CListGroup, CListGroupItem, CRow } from "@coreui/react";
import Board from "./Board";
import Square from "./Square";
import { useState, useEffect } from 'react';
import FooterMath from "./FooterMath";
import { handleSumTable } from "../utils/handleMath";

const defaultSquares = () => (new Array(9)).fill(null);

const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

const operations = [
    { key: 'addition', value: 'Adição' },
    { key: 'subtraction', value: 'Subtração' },
    { key: 'multiplication', value: 'Multiplicação' },
    { key: 'div', value: 'Divisão' }
]

const TicTacToeGame = () => {
    const [squares, setSquares] = useState(defaultSquares());
    const [winner, setWinner] = useState<string | null>(null);
    const [tableSum, setTableSum] = useState<{ calculus: string, result: number }[]>(handleSumTable('addition'));

    useEffect(() => {
        const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;

        const linesThatAre = (a: string | null, b: string | null, c: string | null) => {
            return lines.filter(squareIndexes => {
                const squareValues = squareIndexes.map(index => squares[index]);
                return JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort());
            });
        };

        const emptyIndexes = squares
            .map((square, index) => square === null ? index : null)
            .filter(val => val !== null);

        const playerWon = linesThatAre('x', 'x', 'x').length > 0;
        const computerWon = linesThatAre('o', 'o', 'o').length > 0;

        if (playerWon) {
            setWinner('x');
        }
        else if (computerWon) {
            setWinner('o');
        }

        const putComputerAt = (index: number) => {
            let newSquares = squares;
            newSquares[index] = 'o';
            setSquares([...newSquares]);
        };

        if (isComputerTurn) {

            const winingLines = linesThatAre('o', 'o', null);
            if (winingLines.length > 0) {
                const winIndex = winingLines[0].filter(index => squares[index] === null)[0];
                putComputerAt(winIndex);
                return;
            }

            const linesToBlock = linesThatAre('x', 'x', null);
            if (linesToBlock.length > 0) {
                const blockIndex = linesToBlock[0].filter(index => squares[index] === null)[0];
                putComputerAt(blockIndex);
                return;
            }

            const linesToContinue = linesThatAre('o', null, null);
            if (linesToContinue.length > 0) {
                putComputerAt(linesToContinue[0].filter(index => squares[index] === null)[0]);
                return;
            }

            const randomIndex = emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
            if (randomIndex !== null) {
                console.log(" randomIndex ", randomIndex)
                putComputerAt(randomIndex);
            }
        }
        console.log("squares  -- ", winner)
    }, [squares]);



    const handleSquareClick = (index: number) => {
        const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
        if (isPlayerTurn) {
            let newSquares = squares;
            newSquares[index] = 'x';
            setSquares([...newSquares]);
        }
    }

    const handleRestart = () => {
        setSquares(defaultSquares());
        setTableSum(handleSumTable('addition'));
        setWinner(null);
    }

    console.log(winner)

    return (
        <CContainer fluid>
            <CRow className="m-0">
                <CCol className="d-flex flex-column" xs={3}>
                    <CFormLabel className="w-100 text-center mt-3">Escolha uma operação abaixo 👇🏻</CFormLabel>
                    <CListGroup className="w-100 mt-4">
                        {
                            operations.map((item: { key: string, value: string }, index: number) => (
                                <CListGroupItem
                                    role="button"
                                    color="success border-0 text-dark"
                                    key={index}
                                    className="w-100 mt-2 rounded"
                                    onClick={() => setTableSum(handleSumTable(item.key))}
                                >{item.value}</CListGroupItem>
                            ))
                        }
                    </CListGroup >
                </CCol>
                <CCol className="d-flex justify-content-center border-2 border-start">
                    <CRow className="m-0 justify-content-center">
                        <CContainer className="main">
                            <Board className="gap-1">
                                {squares.map((square, index) =>
                                    <Square
                                        key={index}
                                        x={square === 'x' ? 1 : 0}
                                        o={square === 'o' ? 1 : 0}
                                        table={tableSum[index].calculus}
                                    />
                                )}
                            </Board>
                            {
                                !!winner && winner === 'x' && (
                                    <CContainer className="fs-2 text-success" fluid>
                                        Você GANHOU!
                                    </CContainer>
                                )
                            }
                            {
                                !!winner && winner === 'o' && (
                                    <CContainer className="fs-2 text-danger text-center" fluid>
                                        Você PERDEU!
                                    </CContainer>
                                )
                            }
                            {(!!winner && winner === 'x' || !!winner && winner === 'o') &&
                                <CContainer className="d-flex justify-content-center" fluid>
                                    <CButton onClick={handleRestart}>Jogar Novamente</CButton>
                                </CContainer>
                            }

                        </CContainer>
                        {!winner && <FooterMath listOperations={tableSum} clickOption={handleSquareClick} />}
                    </CRow>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default TicTacToeGame;
