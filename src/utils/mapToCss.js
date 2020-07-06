let globalCssModule;
export function mapToCssModules(className = '', cssModule = globalCssModule) {
    if (!cssModule) {
        return className;
    }
    return className
        .split(' ')
        .map(c => cssModule[c] || c)
        .join(' ');
}