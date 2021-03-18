const logger = platform => store => next => action => {
    console.log(platform)
    next(action);
}

export default logger;