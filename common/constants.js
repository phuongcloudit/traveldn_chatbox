module.exports.FCMNotificationItemTypes = {
    // Book: "Book",
    Ship: "Ship",
    Promotion: "Promotion",
    ChatWithAdmin: "ChatWithAdmin"
}

module.exports.StatusConstants = {
    Available: "Available",
    NotAvailable: "Not available",
    Used: "Used",
    Success: "Success",
    Failed: "Failed",
    Expired: "Expired",
    Uncompleted: "Uncompleted",
    Completed: "Completed",
    Submitted: "Submitted",
    Accepted: "Accepted",
    NotPending: "Not Pending",
    Active: "Active"
}

module.exports.dialogFlow = {
    CLIENT_ACCESS_TOKEN: '64108e64367f4fb8835fbbd546577311',
    DEV_ACCESS_TOKEN: '682ba8dce4404868ac3d17bd14272f6a',
    URL: 'https://api.dialogflow.com/v1/query?v=20150910',
}

module.exports.MessageConstants = {
    SavedSuccessfully: "Saved successfully",
    SomethingGoesWrong: "Oops, something goes wrong",
    RegisterSuccessfully: "Register successfully, please verify your email before login",
    UsernameExistingError: "Username is existing",
    VerifyEmailSuccessfully: "Verify email successfully. Thanks for be our partner",
    EmailVerified: "Email is verified",
    AccountNotExisting: "Opps, this account is not existing",
    CheckEmailMessage: "Check your email to get new password",
    OldPasswordNotCorrect: "Opps, old password is not correct",
    ChangedPasswordSuccessfully: "Changed password successfully",
    AccessDenied: "Access Denied",
    TokenNull: "Token is null",
    TokenValid: "Token is valid",
    TokenInvalid: "Token is invalid",
    TokenExpired: "Token is expired",
    ProviderIDInvalid: "Provider ID is invalid",
    CustomerIDInvalid: "Customer ID is invalid",
    NotFoundProvider: "Cannot found this provider",
    NotFoundAccount: "Cannot found this account",
    NotFoundShip: "Cannot found this ship",
    NotAllowSendNoWaitingMessage: "Cannot update the non-waiting message",
    NotAllowCancelNonePendingShip: "Cannot cancel inprogress ship",
    NotAllowAcceptOrRefuseInprogressShip: "Cannot accept or refuse in progress ship",
    NotAllowCancelNonePendingBook: "Cannot cancel inprogress book",
    NotAllowAcceptOrRefuseInprogressBook: "Cannot accept or refuse inprogress book",
    QRCodeUsed: "This QR code was used",
    NoActivePromotion: "No active promotion",
    MenuNameExistingError: "Menu is existing",
}


module.exports.Lang = {
    EN: "en",
    VI: "vi",
    KO: "ko",
    JA: "ja",
    ZH: "zh",
    DE: "de"
}

module.exports.FormActions = {
    Add: "add",
    Copy: "copy",
    Delete: "delete",
    UpdateMany: "updateMany"
}

module.exports.CurrencyCode = {
    USD: "USD",
    VND: "VND"
}

module.exports.FloatingButtons = {
    GetDirection: 0,
    ChatWithAdmin: 1,
    Promotion: 2,
    Menu: 3,
    Reservation: 4,
    AboutUs: 5,
    Direction: 6,
    StopChatting: 7,
    Ship: 9,
    Contact: 10
}

function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

//=========================================================
// SP BOT
//=========================================================
define("COMMAND_BRIDGE", "ZZZZZZ_COMMAND_BRIDGE_AAAAAA_");
define("COMMAND_SUKIEN", "ZZZZZZ_COMMAND_SUKIEN_AAAAAA_")
define("COMMAND_GO_BACK", "ZZZZZZ_GO_BACK_AAAAAA_");
define("COMMAND_CHAT_WITH_ADMIN", "ZZZZZZ_CHAT_WITH_ADMIN_AAAAAA_");
define("COMMAND_STOP_CHATTING", "ZZZZZZ_STOP_CHATTING_AAAAAA_");
define("COMMAND_THAMQUAN", "ZZZZZZ_COMMAND_THAMQUAN_AAAAAA")
define("COMMAND_ABOUTDN", "ZZZZZZ_ABOUTDN_AAAAAA_");

define("N_DISPLAY", 7);
