import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';

type NewsLetterProps = {}
export const NewsLetter: FC<NewsLetterProps> = () => {

  const [email, setEmail] = useState('')
  const [subscribe, setSubscribe] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleRegistrationFieldsInput = (fieldValue: string) => {
    setEmail(fieldValue)
  }
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
  };

  const loginFail = () => {
    setEmailError(true)
    setSubscribe(false)
  }

  const emailCheck = () => {
    if (validateEmail(email)) setSubscribe(true)
    else { loginFail() }
  }

  return (
    (!subscribe) ? (
      <Box sx={{ backgroundColor: { lg: '#36384d', xs: 'none' }, py: { lg: '162px', xs: 0 }, px: { lg: '100px', xs: 0 }, display: 'flex', justifyContent: 'center' }} >
        <Card raised sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'space-between', borderRadius: { lg: '30px', xs: 0 }, width: { lg: '903px', xs: '375px' }, maxWidth: { lg: '903px', xs: '503px' }, height: { lg: '644px', xs: 'auto' } }}>
          <Box sx={{ display: { lg: 'none', xs: 'contents' } }}>
            <img alt='mobile-illustration' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzc1IiBoZWlnaHQ9IjI4NCIgdmlld0JveD0iMCAwIDM3NSAyODQiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjEwMCUiIHgyPSIwJSIgeTE9IjIxLjMyMiUiIHkyPSI3OC42NzglIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkY2QTNBIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY1MjdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImgiIHgxPSIyMi4zMTklIiB4Mj0iOTkuMTI3JSIgeTE9IjI4LjQ5NyUiIHkyPSI3MC44NTglIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkYzRTgzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY5RjJFIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImsiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkI0NDMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjVCNjQiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJvIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjhGOEY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUVFIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InAiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNDQUNCRTgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFRUUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNDQUNCRTgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iciIgeDE9Ijk3Ljc5MSUiIHgyPSI3LjcyOSUiIHkxPSIyNi45NDQlIiB5Mj0iNzEuODc5JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGOTA0OSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGNUU1RSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJ0IiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkY2QTNEIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY1QjY2Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBpZD0iYSIgZD0iTTAgMHYyNjhjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNmgzNDNjOC44MzcgMCAxNi03LjE2MyAxNi0xNlYwSDBaIi8+PHBhdGggaWQ9ImUiIGQ9Ik0wIDE0LjA1NEMwIDYuMjkyIDYuMjkyIDAgMTQuMDU0IDBIMjIwYzcuNzYyIDAgMTQuMDU0IDYuMjkyIDE0LjA1NCAxNC4wNTR2MTI4LjEwOGMwIDcuNzYyLTYuMjkyIDE0LjA1NC0xNC4wNTQgMTQuMDU0SDE0LjA1NEM2LjI5MiAxNTYuMjE2IDAgMTQ5LjkyNCAwIDE0Mi4xNjJWMTQuMDU0WiIvPjxwYXRoIGlkPSJnIiBkPSJNMCA1Ljk0NkE1Ljk0NiA1Ljk0NiAwIDAgMSA1Ljk0NiAwSDIxMC44MWE1Ljk0NiA1Ljk0NiAwIDAgMSA1Ljk0NiA1Ljk0NnYxMjguMTA4QTUuOTQ2IDUuOTQ2IDAgMCAxIDIxMC44MSAxNDBINS45NDZBNS45NDYgNS45NDYgMCAwIDEgMCAxMzQuMDU0VjUuOTQ2WiIvPjxwYXRoIGlkPSJpIiBkPSJNMCA1Ljk0NkE1Ljk0NiA1Ljk0NiAwIDAgMSA1Ljk0NiAwSDIxMC44MWE1Ljk0NiA1Ljk0NiAwIDAgMSA1Ljk0NiA1Ljk0NnYxMjguMTA4QTUuOTQ2IDUuOTQ2IDAgMCAxIDIxMC44MSAxNDBINS45NDZBNS45NDYgNS45NDYgMCAwIDEgMCAxMzQuMDU0VjUuOTQ2WiIvPjxwYXRoIGlkPSJuIiBkPSJNMCA1Ljk0NkE1Ljk0NiA1Ljk0NiAwIDAgMSA1Ljk0NiAwaDIyMi4xNjJhNS45NDYgNS45NDYgMCAwIDEgNS45NDYgNS45NDZWMTI5LjczYTUuOTQ2IDUuOTQ2IDAgMCAxLTUuOTQ2IDUuOTQ2SDUuOTQ2QTUuOTQ2IDUuOTQ2IDAgMCAxIDAgMTI5LjczVjUuOTQ2WiIvPjxwYXRoIGlkPSJxIiBkPSJNMCAyLjE2MkMwIC45NjguOTY4IDAgMi4xNjIgMGg0OC42NDljMS4xOTQgMCAyLjE2Mi45NjggMi4xNjIgMi4xNjJ2NjUuOTQ2YTIuMTYyIDIuMTYyIDAgMCAxLTIuMTYyIDIuMTYySDIuMTYyQTIuMTYyIDIuMTYyIDAgMCAxIDAgNjguMTA4VjIuMTYyWiIvPjxmaWx0ZXIgaWQ9ImQiIHdpZHRoPSIxNTEuMyUiIGhlaWdodD0iMTc2LjglIiB4PSItMjUuNiUiIHk9Ii0yMyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGR5PSIyNCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMTYiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEwMDAwMDAwMSAwIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZiIgd2lkdGg9IjE1NS40JSIgaGVpZ2h0PSIxODUuNyUiIHg9Ii0yNy43JSIgeT0iLTI1LjclIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZU9mZnNldCBkeT0iMjQiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjE2Ii8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xMDAwMDAwMDEgMCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImoiIHdpZHRoPSIxNTUuNCUiIGhlaWdodD0iMTg1LjclIiB4PSItMjcuNyUiIHk9Ii0yNS43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9IjI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIxNiIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTAwMDAwMDAxIDAiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJtIiB3aWR0aD0iMTUxLjMlIiBoZWlnaHQ9IjE4OC40JSIgeD0iLTI1LjYlIiB5PSItMjYuNSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGR5PSIyNCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMTYiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEwMDAwMDAwMSAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTAgMHYyNjhjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNmgzNDNjOC44MzcgMCAxNi03LjE2MyAxNi0xNlYwSDBaIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAwdjI2OGMwIDguODM3IDcuMTYzIDE2IDE2IDE2aDM0M2M4LjgzNyAwIDE2LTcuMTYzIDE2LTE2VjBIMFoiIG1hc2s9InVybCgjYykiLz48ZyBtYXNrPSJ1cmwoI2MpIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNiA4Ny43ODQpIj48dXNlIHhsaW5rOmhyZWY9IiNlIiBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjZCkiLz48dXNlIHhsaW5rOmhyZWY9IiNlIiBmaWxsPSIjMjQyNzQyIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03LjM1MSA5NS44OTIpIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjx1c2UgeGxpbms6aHJlZj0iI2ciIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNmKSIvPjx1c2UgeGxpbms6aHJlZj0iI2ciIGZpbGw9InVybCgjaCkiLz48L2c+PG1hc2sgaWQ9ImwiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2kiLz48L21hc2s+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48dXNlIHhsaW5rOmhyZWY9IiNpIiBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjaikiLz48dXNlIHhsaW5rOmhyZWY9IiNpIiBmaWxsPSJ1cmwoI2gpIi8+PC9nPjxjaXJjbGUgY3g9IjIxMC44MSIgY3k9IjEzMS44OTIiIHI9Ijg1LjQwNSIgZmlsbD0idXJsKCNrKSIgZmlsbC1ydWxlPSJub256ZXJvIiBtYXNrPSJ1cmwoI2wpIi8+PGNpcmNsZSBjeD0iNzMuNzU0IiBjeT0iLTE4LjY3OCIgcj0iODUuNDA1IiBmaWxsPSJ1cmwoI2spIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjbCkiIHRyYW5zZm9ybT0icm90YXRlKC0xMzUgNzMuNzU0IC0xOC42NzgpIi8+PC9nPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU3LjUxMyAzNS44OTIpIj48dXNlIHhsaW5rOmhyZWY9IiNuIiBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjbSkiLz48dXNlIHhsaW5rOmhyZWY9IiNuIiBmaWxsPSJ1cmwoI28pIi8+PHBhdGggZmlsbD0idXJsKCNwKSIgZD0iTTAgNS45NDZBNS45NDYgNS45NDYgMCAwIDEgNS45NDYgMGg0NS45NDZ2MTM1LjY3Nkg1Ljk0NkE1Ljk0NiA1Ljk0NiAwIDAgMSAwIDEyOS43M1Y1Ljk0NloiLz48cGF0aCBmaWxsPSIjQkFCQkRCIiBkPSJNNy41NjggMjcuMjk3YzAtMS4wNDUuODQ3LTEuODkyIDEuODkxLTEuODkyaDMyLjk3M2ExLjg5MiAxLjg5MiAwIDAgMSAwIDMuNzg0SDkuNDZhMS44OTIgMS44OTIgMCAwIDEtMS44OTEtMS44OTJabTAgMTAuODExYzAtMS4wNDUuODQ3LTEuODkyIDEuODkxLTEuODkyaDI5LjE5YTEuODkyIDEuODkyIDAgMCAxIDAgMy43ODRIOS40NTlhMS44OTIgMS44OTIgMCAwIDEtMS44OTEtMS44OTJabTAgMTAuODFjMC0xLjA0NC44NDctMS44OTEgMS44OTEtMS44OTFoMzIuOTczYTEuODkyIDEuODkyIDAgMCAxIDAgMy43ODRIOS40NmExLjg5MiAxLjg5MiAwIDAgMS0xLjg5MS0xLjg5MlptMCAxMC44MTJjMC0xLjA0NS44NDctMS44OTIgMS44OTEtMS44OTJoMjEuMDgyYTEuODkyIDEuODkyIDAgMCAxIDAgMy43ODRIOS40NTlhMS44OTIgMS44OTIgMCAwIDEtMS44OTEtMS44OTJaIi8+PHBhdGggZmlsbD0iIzI0Mjc0MiIgZD0iTTAgNS45NDZBNS45NDYgNS45NDYgMCAwIDEgNS45NDYgMGgyMjIuMTYyYTUuOTQ2IDUuOTQ2IDAgMCAxIDUuOTQ2IDUuOTQ2djEwLjgxSDBWNS45NDdaIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC42NDkgNC44NjUpIj48Y2lyY2xlIGN4PSIzLjUxNCIgY3k9IjMuNTE0IiByPSIzLjUxNCIgZmlsbD0iI0ZGNjQ2NCIvPjxjaXJjbGUgY3g9IjE1LjQwNiIgY3k9IjMuNTE0IiByPSIzLjUxNCIgZmlsbD0iI0ZGOTI1NSIvPjxjaXJjbGUgY3g9IjI3LjI5NyIgY3k9IjMuNTE0IiByPSIzLjUxNCIgZmlsbD0iIzZCRDRBOCIvPjwvZz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIwLjc1NyAyNCkiPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMi4xNjJDMCAuOTY4Ljk2OCAwIDIuMTYyIDBoNDguNjQ5YzEuMTk0IDAgMi4xNjIuOTY4IDIuMTYyIDIuMTYydjY1Ljk0NmEyLjE2MiAyLjE2MiAwIDAgMS0yLjE2MiAyLjE2MkgyLjE2MkEyLjE2MiAyLjE2MiAwIDAgMSAwIDY4LjEwOFYyLjE2MloiLz48bWFzayBpZD0icyIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjcSIvPjwvbWFzaz48dXNlIHhsaW5rOmhyZWY9IiNxIiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBmaWxsPSJ1cmwoI3IpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik01OC40NDQgMTUuNjFjLjYzMy42MzMuNjM0IDEuNjYgMCAyLjI5M2wtMTMuNjYyIDEzLjY3YTYuMDE4IDYuMDE4IDAgMCAxLTguNTEyIDAgMi43NzQgMi43NzQgMCAwIDAtMy45MjUgMGwtOS40MjIgOS40MjlhNC42ODUgNC42ODUgMCAwIDEtNi42MjggMCAxLjQ0MiAxLjQ0MiAwIDAgMC0yLjA0IDBMLTMuMTc4IDU4LjQ0NEExLjYyMiAxLjYyMiAwIDEgMS01LjQ3IDU2LjE1TDExLjk2IDM4LjcwOWE0LjY4NSA0LjY4NSAwIDAgMSA2LjYyOSAwIDEuNDQyIDEuNDQyIDAgMCAwIDIuMDQgMGw5LjQyMi05LjQyOGE2LjAxOCA2LjAxOCAwIDAgMSA4LjUxMyAwIDIuNzc0IDIuNzc0IDAgMCAwIDMuOTI0IDBsMTMuNjYzLTEzLjY3YTEuNjIyIDEuNjIyIDAgMCAxIDIuMjkzLS4wMDFaIiBtYXNrPSJ1cmwoI3MpIi8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjYuNDg3IDgxLjA4MWMwLTEuMTk0Ljk2OC0yLjE2MiAyLjE2Mi0yLjE2Mmg2NC44NjVjMS4xOTQgMCAyLjE2Mi45NjggMi4xNjIgMi4xNjJ2NzcuODM4YTIuMTYyIDIuMTYyIDAgMCAxLTIuMTYyIDIuMTYySDI4LjY0OWEyLjE2MiAyLjE2MiAwIDAgMS0yLjE2Mi0yLjE2MlY4MS4wODFaIi8+PHBhdGggZmlsbD0idXJsKCN0KSIgZD0iTTI1LjEzNSA0Mi43MDNjOS43MDIgMCAxNy41NjgtNy44NjYgMTcuNTY4LTE3LjU2OCAwLTkuNzAyLTcuODY2LTE3LjU2Ny0xNy41NjgtMTcuNTY3LTkuNzAyIDAtMTcuNTY3IDcuODY1LTE3LjU2NyAxNy41NjdzNy44NjUgMTcuNTY4IDE3LjU2NyAxNy41NjhabTAgNy41NjdjMTMuODgyIDAgMjUuMTM1LTExLjI1MyAyNS4xMzUtMjUuMTM1QzUwLjI3IDExLjI1MyAzOS4wMTcgMCAyNS4xMzUgMCAxMS4yNTMgMCAwIDExLjI1MyAwIDI1LjEzNSAwIDM5LjAxNyAxMS4yNTMgNTAuMjcgMjUuMTM1IDUwLjI3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuMjE3IDk0LjU5NSkiLz48cGF0aCBmaWxsPSIjMjQyNzQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik01Mi4yMjIgMTE3LjE0NWMwIDEuMjI4LjMxOCAyLjIuOTU0IDIuOTE0LjYzNy43MSAxLjUwNCAxLjA2NCAyLjYwMiAxLjA2NCAxLjAxOSAwIDEuODE2LS4zNjMgMi4zOS0xLjA5LjU4LS43MjYuODctMS42MzIuODctMi43MTloLS42MzRjMCAuNjItLjE3MSAxLjExMi0uNTE1IDEuNDc4YTEuNjg4IDEuNjg4IDAgMCAxLTEuMjg0LjU1Yy0uNTQ2IDAtLjk1MS0uMTg0LTEuMjE2LS41NS0uMjY0LS4zNzEtLjM5Ny0uOTE1LS4zOTctMS42MyAwLS44MTYuMTMzLTEuNDAyLjM5Ny0xLjc1Ny4yNy0uMzYuNjctLjU0IDEuMi0uNTQuNTY4IDAgMS4wMS4yMzQgMS4zMjYuNy4zMTUuNDY4LjQ3MyAxLjMwNC40NzMgMi41MWwuMDc2LjMzN2MwIDEuNzg1LS4zOTIgMy4wNTItMS4xNzQgMy44LS43ODMuNzUtMS44OSAxLjEyMS0zLjMyIDEuMTE2aC0uMzh2Mi4xNDVoLjQ0YzIuMjk3LS4wMjMgNC4wNS0uNjQ1IDUuMjYxLTEuODY3IDEuMjE2LTEuMjI3IDEuODI1LTIuODggMS44MjUtNC45NTd2LS40NGMwLTEuODY5LS40Mi0zLjIyLTEuMjU5LTQuMDU0LS44MzktLjgzOS0xLjkyMy0xLjI1OC0zLjI1Mi0xLjI1OC0xLjMzNCAwLTIuMzk4LjM4Ni0zLjE5MiAxLjE1N3MtMS4xOTEgMS44MDItMS4xOTEgMy4wOTFabTE0Ljc2NCA4LjI2aDIuNjF2LTEyLjI5N2gtMi40NDJsLTUuNDY0IDcuODcydjEuODU4aDkuMjY1di0yLjEwM2gtMi42NjlsLS40MzkuMDQyaC0zLjUxNGwyLjYxLTQuMDg4aC4wODV2NS4xODZsLS4wNDIuMjk2djMuMjM0WiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==' />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mx: { lg: '59px', xs: 4 }, mt: { lg: '96px', xs: 0 }, mb: { lg: '96px', xs: 5 }, color: '#252841' }}>
            <Typography variant='h3' sx={{ fontWeight: 'bold', mb: { lg: 0, xs: 3 }, mt: { lg: 0, xs: 5 } }}>Stay updated!</Typography>
            <Typography variant='subtitle2' sx={{ fontSize: 14, mb: { lg: 0, xs: 3 } }}>Join 60,000+ product managers receiving monthly updates on:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg>
                <Typography variant='subtitle2' sx={{ ml: 2, mb: 2 }}>Product discovery and building what matters</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg>
                <Typography variant='subtitle2' sx={{ ml: 2, mb: 2 }}>Measuring to ensure updates are a success</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg>
                <Typography variant='subtitle2' sx={{ ml: 2, mb: 2 }}>And much more!</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: { xs: 3, lg: 0 } }}>
                <Typography variant='h6' sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                  Email address
                </Typography>
                {(emailError) ?
                  <Typography variant='h6' sx={{ fontSize: '11px', fontWeight: 'bold', color: 'hsl(4, 100%, 67%)' }}>
                    Valid email required
                  </Typography> : null}
              </Box>
              <TextField id='email' sx={{ mb: 3, mt: { xs: 1, lg: 1 }, borderRadius: '10px' }} defaultValue="email@company.com" onChange={(event) => {
                handleRegistrationFieldsInput(event.target.value);
              }}
                onFocus={() => { setEmailError(false) }}
                error={(emailError ? true : false)}
                inputProps={(emailError) ? { sx: { backgroundColor: '#ffe8e6', color: 'hsl(4, 100%, 67%)' } } : { sx: { backgroundColor: 'white' } }}
                InputProps={{ sx: { borderRadius: '10px' } }}
              />
              <Button variant='contained' sx={{ height: '56px', borderRadius: '10px' }}><Typography variant='subtitle2' sx={{ fontSize: '15px', fontWeight: 'bold' }} onClick={() => { emailCheck(); }}>Subscribe to monthly newsletter</Typography></Button>
            </Box>
          </Box>
          <Box sx={{ my: '22px', mx: '22px', display: { xs: 'none', lg: 'block' } }}>
            <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="400" height="593" viewBox="0 0 400 593"><defs><linearGradient id="b" x1="72.75%" x2="27.25%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF6A3A" /><stop offset="100%" stopColor="#FF527B" /></linearGradient><linearGradient id="h" x1="22.319%" x2="99.127%" y1="28.497%" y2="70.858%"><stop offset="0%" stopColor="#FF3E83" /><stop offset="100%" stopColor="#FF9F2E" /></linearGradient><linearGradient id="k" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FFB443" /><stop offset="100%" stopColor="#FF5B64" stopOpacity="0" /></linearGradient><linearGradient id="o" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#F8F8F8" /><stop offset="100%" stopColor="#EEE" /></linearGradient><linearGradient id="p" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#CACBE8" /><stop offset="100%" stopColor="#EEE" /><stop offset="100%" stopColor="#CACBE8" /></linearGradient><linearGradient id="r" x1="97.791%" x2="7.729%" y1="26.944%" y2="71.879%"><stop offset="0%" stopColor="#FF9049" /><stop offset="100%" stopColor="#FF5E5E" /></linearGradient><linearGradient id="t" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF6A3D" /><stop offset="100%" stopColor="#FF5B66" /></linearGradient><path id="e" d="M0 26C0 11.64 11.64 0 26 0h381c14.36 0 26 11.64 26 26v237c0 14.36-11.64 26-26 26H26c-14.36 0-26-11.64-26-26V26Z" /><path id="g" d="M0 11C0 4.925 4.925 0 11 0h379c6.075 0 11 4.925 11 11v237c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z" /><path id="i" d="M0 11C0 4.925 4.925 0 11 0h379c6.075 0 11 4.925 11 11v237c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z" /><path id="n" d="M0 11C0 4.925 4.925 0 11 0h411c6.075 0 11 4.925 11 11v229c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z" /><path id="q" d="M0 4a4 4 0 0 1 4-4h90a4 4 0 0 1 4 4v122a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z" /><filter id="d" width="127.7%" height="141.5%" x="-13.9%" y="-12.5%" filterUnits="objectBoundingBox"><feOffset dy="24" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="16" /><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0" /></filter><filter id="f" width="129.9%" height="146.3%" x="-15%" y="-13.9%" filterUnits="objectBoundingBox"><feOffset dy="24" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="16" /><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0" /></filter><filter id="j" width="129.9%" height="146.3%" x="-15%" y="-13.9%" filterUnits="objectBoundingBox"><feOffset dy="24" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="16" /><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0" /></filter><filter id="m" width="127.7%" height="147.8%" x="-13.9%" y="-14.3%" filterUnits="objectBoundingBox"><feOffset dy="24" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="16" /><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0" /></filter><rect id="a" width="400" height="593" x="0" y="0" rx="16" /></defs><g fill="none" fillRule="evenodd"><mask id="c" fill="#fff"><use xlinkHref="#a" /></mask><rect width="400" height="593" rx="16" /><path fill="url(#b)" fillRule="nonzero" d="M0 0h400v593H0z" mask="url(#c)" /><g mask="url(#c)"><g fillRule="nonzero" transform="translate(-192 211)"><use xlinkHref="#e" fill="#000" filter="url(#d)" /><use xlinkHref="#e" fill="#242742" /></g><g transform="translate(-176 226)"><g fillRule="nonzero"><use xlinkHref="#g" fill="#000" filter="url(#f)" /><use xlinkHref="#g" fill="url(#h)" /></g><mask id="l" fill="#fff"><use xlinkHref="#i" /></mask><g fillRule="nonzero"><use xlinkHref="#i" fill="#000" filter="url(#j)" /><use xlinkHref="#i" fill="url(#h)" /></g><circle cx="390" cy="244" r="158" fill="url(#k)" fillRule="nonzero" mask="url(#l)" /><circle cx="136.446" cy="-34.554" r="158" fill="url(#k)" fillRule="nonzero" mask="url(#l)" transform="rotate(-135 136.446 -34.554)" /></g><g fillRule="nonzero" transform="translate(129 115)"><use xlinkHref="#n" fill="#000" filter="url(#m)" /><use xlinkHref="#n" fill="url(#o)" /><path fill="url(#p)" d="M0 11C0 4.925 4.925 0 11 0h85v251H11c-6.075 0-11-4.925-11-11V11Z" /><path fill="#BABBDB" d="M14 50.5a3.5 3.5 0 0 1 3.5-3.5h61a3.5 3.5 0 0 1 0 7h-61a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h54a3.5 3.5 0 0 1 0 7h-54a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h61a3.5 3.5 0 0 1 0 7h-61a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h39a3.5 3.5 0 1 1 0 7h-39a3.5 3.5 0 0 1-3.5-3.5Z" /><path fill="#242742" d="M0 11C0 4.925 4.925 0 11 0h411c6.075 0 11 4.925 11 11v20H0V11Z" /><g transform="translate(16 9)"><circle cx="6.5" cy="6.5" r="6.5" fill="#FF6464" /><circle cx="28.5" cy="6.5" r="6.5" fill="#FF9255" /><circle cx="50.5" cy="6.5" r="6.5" fill="#6BD4A8" /></g></g><g transform="translate(246 93)"><path fill="#FFF" fillRule="nonzero" d="M0 4a4 4 0 0 1 4-4h90a4 4 0 0 1 4 4v122a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z" /><mask id="s" fill="#fff"><use xlinkHref="#q" /></mask><use xlinkHref="#q" fill="#FFF" fillRule="nonzero" /><path fill="url(#r)" fillRule="nonzero" d="M108.12 28.878a3 3 0 0 1 .002 4.243L82.847 58.41c-4.348 4.351-11.4 4.351-15.749 0a5.132 5.132 0 0 0-7.26 0L42.406 75.853a8.668 8.668 0 0 1-12.262 0 2.668 2.668 0 0 0-3.774 0l-32.248 32.268a3 3 0 1 1-4.244-4.242l32.248-32.267a8.668 8.668 0 0 1 12.262 0 2.668 2.668 0 0 0 3.774 0L55.594 54.17c4.348-4.35 11.4-4.35 15.748 0a5.132 5.132 0 0 0 7.26 0l25.276-25.29a3 3 0 0 1 4.243-.002Z" mask="url(#s)" /><path fill="#FFF" fillRule="nonzero" d="M49 150a4 4 0 0 1 4-4h120a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H53a4 4 0 0 1-4-4V150Z" /><path fill="url(#t)" d="M46.5 79C64.45 79 79 64.45 79 46.5S64.45 14 46.5 14 14 28.55 14 46.5 28.55 79 46.5 79Zm0 14C72.181 93 93 72.181 93 46.5S72.181 0 46.5 0 0 20.819 0 46.5 20.819 93 46.5 93Z" transform="translate(67 175)" /><path fill="#242742" fillRule="nonzero" d="M96.61 216.72c0 2.27.589 4.067 1.766 5.39 1.177 1.313 2.78 1.969 4.812 1.969 1.886 0 3.36-.672 4.422-2.016 1.073-1.344 1.61-3.02 1.61-5.031h-1.172c0 1.146-.318 2.057-.954 2.734-.635.677-1.427 1.016-2.375 1.016-1.01 0-1.76-.339-2.25-1.016-.49-.687-.734-1.692-.734-3.015 0-1.51.245-2.594.734-3.25.5-.667 1.24-1 2.22-1 1.051 0 1.869.432 2.452 1.297.584.864.875 2.411.875 4.64l.14.625c0 3.302-.723 5.646-2.171 7.031-1.448 1.386-3.495 2.073-6.14 2.063h-.704v3.969h.813c4.25-.042 7.495-1.193 9.734-3.453 2.25-2.271 3.375-5.329 3.375-9.172v-.813c0-3.458-.776-5.958-2.328-7.5-1.552-1.552-3.557-2.328-6.016-2.328-2.468 0-4.437.714-5.906 2.14-1.469 1.428-2.203 3.334-2.203 5.72ZM123.923 232h4.828v-22.75h-4.516l-10.11 14.563v3.438h17.141v-3.891h-4.937l-.813.078h-6.5l4.828-7.562h.157v9.593l-.079.547v5.985Z" /></g></g></g></svg>
          </Box>
        </Card>
      </Box>

    ) : (
      < Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#36384d', py: { lg: '162px', xs: 0 }, px: { lg: '200px', xs: 0 } }} >
        <Card raised sx={{ borderRadius: { lg: '30px', xs: 0 }, maxWidth: '503px', maxHeight: { lg: '520px', xs: 'auto' }, my: { lg: '72px', xs: 0 } }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', mx: { lg: '59px', xs: '26px' }, mt: { lg: '50px', xs: 20 }, mb: { lg: '50px', xs: '50px' }, color: '#252841' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF6A3A" /><stop offset="100%" stopColor="#FF527B" /></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)" /><path stroke="#FFF" strokeWidth="4" d="m18.286 34.686 8.334 7.98 19.094-18.285" /></g></svg>
            <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 3, mt: 5, lineHeight: 1 }}>Thanks for subscribing!</Typography>
            <Typography variant='subtitle2' sx={{ fontSize: { lg: 14, xs: 16 }, mb: { lg: 4.5, xs: 33 } }}>A conformation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</Typography>
            <Button variant='contained' sx={{ height: '56px', mb: 2, borderRadius: '10px' }}><Typography variant='subtitle2' sx={{ fontSize: '15px', fontWeight: 'bold' }} onClick={() => { setSubscribe(false); setEmail(''); setEmailError(false) }}>Dismiss message</Typography></Button>
          </Box>
        </Card >
      </Box >
    )
  )
}