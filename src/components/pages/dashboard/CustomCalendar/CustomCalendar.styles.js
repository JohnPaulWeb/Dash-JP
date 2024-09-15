import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { theme } from "../../../../styles/theme/theme";


export const CustomCalendarWrap = styled.div`
    ${BlockWrapStyles}
    min-width: 100%;

    .react-calendar{
       background: transparent;
       border-none;
       font-family: ${theme.typography.fontFamily}!important;
       margin-right: auto;
       margin-left: auto;

       .react-calendar_navigation{
         .react-calendar_navigation_arrow{
            color: ${theme.colors.white};
            border-radius: 100vh;

            &:hover{
              background: ${theme.colors.spaceCadet2};
            }
         }

         button:disabled button:enabled:focus{
            background: ${theme.colors.spaceCadet2};
         }

         .react-calendar_navigation_label{
            color: ${theme.colors.white}!important;
            background: ${theme.colors.spaceCadet2};
            border-radius: 100vh;

            &:hover{
               background: ${theme.colors.spaceCadet2};
            }
         }
       }

       .react-calendar_title{
         color: ${theme.colors.white};
         border-radius: 100vh;
         font-size: 12px;

         &:hover{
            background: ${theme.colors.majorelleBlue};
         }

         &.react-calendar_title--now{
           background: ${theme.colors.majorelleBlue};
           &.react-calendar_title--active{
              background: ${theme.colors.majorelleBlue }
           }
         }
       }
    }
`;