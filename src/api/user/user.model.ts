/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-07 01:46:34
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-07 01:55:44
 * @FilePath: \uni-cms\src\api\user\user.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-07 01:46:34
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-07 01:53:09
 * @FilePath: \uni-cms\src\api\user\user.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ApiResp } from './../types'

export interface LoginParm {
  username: string;
  password: string;
}

export interface LoginResp extends ApiResp {
  data: {
    access_token: string;
  }
}
