// @dynamic
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    /**
     * Creates a GUID
     */
    StringHelper.guid = function () {
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
        return uuid;
    };
    StringHelper.createHash = function (object) {
        return JSON.stringify(object || null);
    };
    return StringHelper;
}());
export { StringHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvc3RyaW5nLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1g7SUFBQTtJQW9CQSxDQUFDO0lBbkJDOztPQUVHO0lBQ1csaUJBQUksR0FBbEI7UUFDRSxJQUFNLElBQUksR0FBRyxzQ0FBc0MsQ0FBQyxPQUFPLENBQ3pELE9BQU8sRUFDUCxVQUFDLENBQVM7WUFDUixJQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ2hDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0QyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNGLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFYSx1QkFBVSxHQUF4QixVQUF5QixNQUFXO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgU3RyaW5nSGVscGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBHVUlEXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGd1aWQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZShcbiAgICAgIC9beHldL2csXG4gICAgICAoYzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgICAgICB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHV1aWQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUhhc2gob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QgfHwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==