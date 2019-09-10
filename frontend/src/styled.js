import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #ddd;
    margin: 0 auto;
    padding: 0 15;
    width: 100%;
    max-width: 960px;
`

export const SignUpWrapper = styled.div`
    padding: 50;
`
export const ChatWrapper = styled.div`
    padding: 10;
`

export const ChatTitleContainer = styled.div`
    background-color: #6fb0dc;
    border-bottom: 1px solid #5887a7;
    padding: 20px 10px;
`

export const ChatTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 22;
    font-weight: bold;
    margin: 0;
    padding: 0;
    width: 100%;
`
export const Username = styled.span`
    color: #5887a7;
    cursor: pointer;
    font-size: 16;
    font-weight: normal;
    text-align: right;
`
export const ChatInputWrapper = styled.div`
    background-color: #FFFFFF;
`

export const ChatInput = styled.input`
    border: 0 solid #333;
    border-top-width: 1;
    border-radius: 0;
    padding: 5;
    margin: 0;
    width: 100%;
`