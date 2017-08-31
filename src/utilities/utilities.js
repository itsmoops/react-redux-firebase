const utilities = {
    isSmallDevice() {
        const mobileReg = new RegExp(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)
        if (mobileReg.test(window.navigator.userAgent)) {
            return true
        } else if (window.innerWidth < 768) {
            return true
        }
        return false
    }
}

export default utilities
