import WechatMsgSignUtils from "../nodes/help/utils/WechatMsgSignUtils";


console.log(WechatMsgSignUtils.decrypt('WCmzEPkS0TFI5zyl8y36d1Q4UZBocui3QQQN2WNkMNGXHwMB+giWVY8pNUWMbSepyjM9zShlRsMSW1CMGkDfsIrVW3UrEG5cKvNrvv7fQArGZp6tCFbJ43pEdOJxtTxlJB4NBLPhnhYF8gWs0Rn9yIOpZtslD2kEAmg6iRvkMh5fvnr6dfMojL1usrzPicKOROJraDSiEFqqAJ4AUXhqWCTq/+gTT2EKDR6XRFxLWXSIN168c1KeuHaAyDs1r1uyTAtga9zWEjQ9MUO9Rh9k1PceoV3/5L/Oq8RJQmJIAOzoAu/0Wi+v2phXuDrsAaXVuEcpIhvxsnyFz8vMIe38+p7N2XnFTevjEftedUYEBJdiLeGfoymgs5Pz0w9DoRMnDyKoQtXXe5PgSIMsLPUlYCTEYidXwpjjMPFknggPHYmey2ALvPPsCK/EWeGQLEGyZ/M8NRjOOO8jWaPnnrOI3A==', 'OYsDS78KecChxInnYVAnfrI4ui7oTsD61QWyaYQOhqp'));


const response = WechatMsgSignUtils.encryptResponse('2333', 'OYsDS78KecChxInnYVAnfrI4ui7oTsD61QWyaYQOhqp', '1212323', 'wx516282ad819e07cb');

console.log(response);
