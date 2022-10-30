import React from "react";
import { Brand } from "./Brand";
import { Container } from "./Container"
import {GlobalStyle} from "./GolobalStyle";
import { Card } from "./Card";
import { Chart } from "./Chart";

export function Dashboard(){
    return (
        <>
            <GlobalStyle/>
                <Container>
                    <Brand/>
                    <Chart/>
                    <Card height={250}>
                        Table
                    </Card>

                </Container>

        </>
      );
}
