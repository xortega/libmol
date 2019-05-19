import axios, { CancelTokenSource, AxiosResponse } from 'axios'
import {LibmolResponse} from './queryLibmolElectron'
export interface LibmolQueryResponse {
    molId: string,
    label: string,
    file: string
}
const CancelToken = axios.CancelToken
let source: CancelTokenSource;
const path = (process.env.NODE_ENV !== 'production') ?
    'api/recherche.php' :
    'https://libmol.org/api/recherche.php'

function cancelRequest () {
    if (source !== undefined) source.cancel()
}

function query (queryString: string): Promise<LibmolResponse[]> {
    source = CancelToken.source()

    return Promise.resolve().then(function () {
        return axios.get(path, {
            params: {
                txt: queryString
            },
            cancelToken: source.token
        })
    })
    .then((response: AxiosResponse<LibmolQueryResponse[]>) => {
        return response.data.map((item) => {
            let filename = (item.file.indexOf('.gz') > -1) ?
                item.file.substring(0, item.file.lastIndexOf('.gz')) : item.file

            return { value: item.label,
              file: (filename.indexOf('.mmtf') > -1) ?
                'static/mol/' + item.file : // item.file is intentional
                ((filename.indexOf('.cif') > -1) || (filename.indexOf('.sdf') > -1))
                    ? 'static/mol/' + filename + '.gz'
                    : `static/mol/pdb/${filename}.pdb.gz`,
              molId: item.molId,
              source: 'libmol'
            }
        })
    })
}

function isCancel (error: any) {
    return axios.isCancel(error)
}

export default {
    cancelRequest,
    query,
    isCancel
}