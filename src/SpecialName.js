const specialName = (name) => {
    if (name.includes('xhiu')){
        return 'xhiu dep trai!';
    }

    if (name.includes('vinh')) {
        return 'vinh đù!';
    }

    if (name.includes('thang') || name.includes('thắng')) {
        return 'thắng đù!';
    }

    if (name.includes('hien') || name.includes('hiển')) {
        return 'hiển ngu!';
    }

    if (name.includes('an') || name.includes('jack')){
        return 'Top 1 top 2 công viên!';
    }

    if (name.includes('hung') || name.includes('hùng')){
        return 'Chê Hùng!';
    }

    if (name.includes('trung')){
        return 'Trung Tệ!';
    }

    if (name.includes('lam') || name.includes('lâm')){
        return 'Cu đù cu đú!';
    }

    if (name.includes('minh')){
        return 'Minh đần!';
    }
    return '';
}

module.exports = specialName;