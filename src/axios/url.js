// 测试环境
const DEV_URL = {
	dip:'http://192.168.0.1:8008',
	wip:{
		ip:'192.168.0.1',
		port:'8093',
		uri:''
	}
}
// 线上环境
const PRO_URL = {
	dip:window.location.protocol + "//" + window.location.hostname + ":" + window.location.port,
	wip:{
			ip: window.location.hostname,
			port: window.location.port,
			uri:''
		}
}

export default process.env.NODE_ENV === 'development' ? DEV_URL : PRO_URL