import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 150px;
`;

export const StyledQuestionLabel = styled.label`
    display: block;
`;

export const StyledAnswer = styled.label`
    display: flex;
    align-items: center;

    input {
        margin-top: 0px;
    }
`;

export const StyledConditionalInput = styled.textarea`
    width: 80%;
    height: 100px;
`;