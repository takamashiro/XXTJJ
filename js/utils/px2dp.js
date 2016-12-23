/**
 * Created by takamashiro on 2016/12/23.
 */
import {Dimensions} from 'react-native';

const deviceHeightDp = Dimensions.get('window').height;
const uiHeightPx = 640;

export default function px2dp(uiElementPx) {
    return uiElementPx * deviceHeightDp / uiHeightPx;
}