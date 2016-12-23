/**
 * Created by takamashiro on 2016/12/23.
 */
// time format 2016-11-11T18:56:33.904Z
export default function computeTime(time) {
    // 获取年月日 格式2016/11/11
    var datePart = time.substring(0,10).replace(/\-/g,"/");
    // 获取时间 格式18:56:33
    var timePart = time.substring(11,19)

    var compareTime = (new Date(datePart+' '+timePart)).getTime();
    var currentTime = new Date().getTime();
    var diffValue = currentTime - compareTime;

    const kDay = 24*60*60*1000;
    const kHour = 60*60*1000;
    const kMinutes = 60*1000;
    var days = Math.floor(diffValue/kDay);
    if(days===0){
        var  level1 = diffValue%kDay;//计算天数后剩余的毫秒数
        var hours = Math.floor(level1/kHour);
        if(hours===0) {
            var level2 = level1 % kHour;//计算小时数后剩余的毫秒数
            var minutes = Math.floor(level2/kMinutes);
            if (minutes===0) {
                // 计算相差秒数
                var level3 = level2%kMinutes; //计算分钟数后剩余的毫秒数
                var seconds = Math.round(level3/1000);
                return seconds+'秒前'
            }
            return minutes+'分钟钱'
        }
        return hours+'小时前'
    }
    return days+'天前'
}