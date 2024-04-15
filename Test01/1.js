// ==UserScript==
// @name              微博超话批量签到
// @namespace         https://github.com/inu1255/soulsign-chrome
// @version           1.0.0
// @author            KaleoFeng
// @loginURL          https://weibo.com
// @expire            900e3
// @domain            weibo.com
// @param             reserved 暂无参数
// ==/UserScript==

// 【本地超话列表】
// hid 超话ID
// hname 超话名称
let chaohuas = [
    {
      "hid": "100808c6b08fe8916e95b4d0cd85a03a66fa0b",
      "hname": "林俊杰"
    },{
        "hid": "100808fce790816f4acfad5ac206e01857edf4",
        "hname": "新兰"
      },{
        "hid": "100808cb8f14090af3caeebba04103cc7f8ce9",
        "hname": "薛之谦"
      },{
        "hid": "1008081602c610a58c2bd3545101db2907ef87",
        "hname": "罗小黑"
      },{
        "hid": "100808167de8f857d9ed4ff9d097dc0b425e66",
        "hname": "柯南"
      },{
        "hid": "1008087a8941058aaf4df5147042ce104568da",
        "hname": "周杰伦"
      },{
        "hid": "1008089e28e16dc078315dffce410da0740f3a",
        "hname": "张杰"
      },{
        "hid": "1008082dea94ff12ca939da5c92633051e330c",
        "hname": "五月天"
      }
  ];
  
  // 当前时间戳
  const timestamp = new Date().getTime();
  
  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  
  async function doSignIn(hid, hname) {
    const url = 'https://weibo.com/p/aj/general/button?ajwvr=6';
  
    const rsp = await axios({
      url: url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'https://weibo.com',
        'Referer': `https://weibo.com/p/${hid}/super_index`
      },
  
      params: {
        'api': 'http://i.huati.weibo.com/aj/super/checkin',
        'texta': '签到',
        'textb': '已签到',
        'status': '0',
        'id': hid,
        'location': 'page_100808_super_index',
        'timezone': 'GMT 0800',
        'lang': 'zh-cn',
        'plat': 'Win32',
        'ua': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'screen': '1920*1080',
        '__rnd': timestamp,
      }
    });
  
    if (rsp.status != 200) {
      return {
        success: false,
        msg: `超话签到[${hname}]: ${rsp.status}-操作失败`
      };
    }
  
    return {
      success: rsp.data.code == '100000' || rsp.data.code == '382004',
      msg: `超话签到[${hname}]: ${rsp.data.code}-${rsp.data.msg}`
    };
  }
  
  exports.run = async function(param) {
    let result = {};
  
    // 执行超话批量签到
    let count = 0;
    for (const chaohua of chaohuas) {
      const hid = chaohua['hid'];
      const hname = chaohua['hname'];
  
      let result = await doSignIn(hid, hname);
      if (!result.success) {
        throw result.msg;
      }
  
      ++count;
      await sleep(3000);
    }
  
    return `操作成功: 完成数量[${count}]`;
  };
  
  exports.check = async function(param) {
    return true;
  };
