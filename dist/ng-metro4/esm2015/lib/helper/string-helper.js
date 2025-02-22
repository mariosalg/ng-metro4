// @dynamic
export class StringHelper {
    /**
     * Creates a GUID
     */
    static guid() {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
        return uuid;
    }
    static createHash(object) {
        return JSON.stringify(object || null);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvc3RyaW5nLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1gsTUFBTSxPQUFPLFlBQVk7SUFDdkI7O09BRUc7SUFDSSxNQUFNLENBQUMsSUFBSTtRQUNoQixNQUFNLElBQUksR0FBRyxzQ0FBc0MsQ0FBQyxPQUFPLENBQ3pELE9BQU8sRUFDUCxDQUFDLENBQVMsRUFBVSxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDaEMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBVztRQUNsQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgU3RyaW5nSGVscGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBHVUlEXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGd1aWQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZShcbiAgICAgIC9beHldL2csXG4gICAgICAoYzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgICAgICB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHV1aWQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUhhc2gob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QgfHwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==