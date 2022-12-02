export class ApiServiceConf {
    serverUrl: string = "assets/data/";

    serverUrlOnline: string = "";

    concatParam(paramArray) {
        let urlParam = '';
        let index = 0;
        for (let param of paramArray) {
            urlParam += '&' + param.name +'=' + param.value;
            index++;
        }
        return urlParam;
    }

}