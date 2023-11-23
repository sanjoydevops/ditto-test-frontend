const isObjectEmpty = obj => obj
    && Object.keys(obj).length === 0
    && Object.getPrototypeOf(obj) === Object.prototype
    && obj.constructor === Object;

export default isObjectEmpty;
