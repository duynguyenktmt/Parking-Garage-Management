package com.microservice.payment.common;

public enum CommonPINErrorCode {
    SUCCESS(0, "SUCCESS"),
    SYSERROR(11400, "System Error"),
    INVALID_CURRENCY(11401, "Invalid currency"),
    REMARKS_REQUIRED(11402, "Remarks required"),
    INVALID_REMARKS(11403, "Invalid remark"),
    INVALID_AMOUNT(11404, "Invalid amount"),
    USERNAME_REQUIRED(11405, "User name required"),
    INVALID_TYPE(11406, "Invalid type"),
    NOTIFYURL_REQUIRED(11407, "Notify required"),
    BACKURL_REQUIRED(11408, "Back Url required"),
    TNXNO_REQUIRED(11409, "Transaction No required"),
    INVALID_MERCHANT(11410, "Invalid Merchant"),
    INVALID_MESSAGE(11411, "Invalid Message"),
    INVALID_MD5(11419, "Invalid MD5 code"),
    NO_BENEFICIARY_CARD(11412, "No beneficiary Card"),
    USERID_REQUIRED(11413, "User id required"),
    TRANSACTION_NOT_FOUND(11414, "Transaction not found"),
    PAYMENT_PROVIDER_NOT_FOUND(11415, "Payment provider not found"),
    TRANSACTION_DUPLICATED(11416, "Transaction is duplicated"),
    TRANSACTION_FAILED_TO_CREATE(11417, "Failed to create transaction"),
    PAYMENT_TYPE_NOT_FOUND(11418, "Payment type not found"),
    MISSING_PARAMS(11420, "Missing parameters"),
    MERCHANT_TRANSACTION_NO_DUPLICATED(11421, "Merchant transaction is duplicated"),
    INVALID_TRANSACTION_STATUS(11422, "Transaction status is invalid"),
    TRANSACTION_DETAIL_NOT_FOUND(11423, "Transaction detail not found"),
    INVALID_TRANSACTION_REQUEST(11424, "Transaction request invalid"),
    FAILED_TO_ASSIGN_PAYMENT_TO_TRANSACTION(11425, "Failed to assign a payment service to transaction"),
    TRANSACTION_TYPE_INVALID(11426, "Transaction Type Invalid"),
    PAYMENT_METHOD_REQUIRED(11427, "Payment Method Required"),
    NO_AVAILABLE_PAYMENT_PROVIDER(11428, "No payment providers available for this transaction."),
    INVALID_MAXLENGTH(11429, "The maxlength of specific parameter is invalid"),
    INVALID_MINLENGTH(11430, "The minlength of specific parameter is invalid"),
    TRANSACTION_NOT_ASSIGNED_TO_PSP(11431, "Transaction isn't assigned to PSP"),
    TRANSACTION_NOT_ASSIGNED_TO_PROCESSING_LEVEL(11432, "There is no processing level be assigned. Please check the processing level settings."),
    PAYMENT_CHANNEL_NOT_FOUND(11433, "Payment Channel Not Found"),
    USER_TYPE_REQUIRED(11434, "User type required"),
    COUNTRY_REQUIRED(11435, "Country required"),
    INVALID_PLATFORM(11436, "Invalid platform"),
    PAYMENT_CHANNEL_CONFIG_NOT_FOUND(11437, "Payment Channel Configuration Not Found"),
    PAYMENT_PROCESSOR_NOT_FOUND(11438, "Payment Processor Not Found"),
    PSP_MERCHANT_ACCOUNT_NOT_FOUND(11439, "PSP Merchant Account Not Found"),
    PSP_MERCHANT_ACCOUNT_PAYMENT_PROCESSOR_SETTINGS_NOT_FOUND(11440, "The Payment Processor Settings of PSP Merchant Account Not Found"),
    PENDING_PSP_ASSIGNMENT(11441, "Pending PSP Assignment"),
    PSP_NOT_FOUND(11442, "PSP Not Found"),
    PSP_QUERY_NOT_IMPLEMENTED(11443, "PSP Query Not Implemented"),
    PSP_MERCHANT_ACCOUNT_PAYMENT_PROCESSOR_SETTINGS_MULTIPLE_CALLBACK_URL(11444, "The Payment Processor Settings of PSP Merchant Account Is Multiple Callback Url"),
    PAYMENT_PROCESSOR_NOT_MATCHED(11445, "Payment Processor Not Matched"),
    INVALID_AUTHORIZATION(11446, "Invalid Authorization"),
    PSP_COMMUNICATION_PROBLEM(11447, "Communication problem with PSP"),
    PSP_INSUFFICIENT_WITHDRAWAL_BALANCE(11448, "Insufficient balance at provider to process the withdrawal"),
    PSP_RECENT_DEPOSIT_ATTEMPT_FAIL(11449, "Your recent deposit attempt failed, please try to submit your request again"),
    CRYPTO_ADDRESS_CUSTOMER_MAPPING_NOT_FOUND(11450, "No crypto address found"),
    CRYPTO_NOTIFY_SIGNATURE_INVALID(11451, "Crypto notify signature invalid"),
    CRYPTO_ADDRESS_INVALID(11452, "Crypto Address Invalid"),
    CRYPTO_GET_ESTIMATE_FEE_INSUFFICIENT_FUNDS(11453, "Crypto insufficient funds"),
    CRYPTO_NETWORK_FEE_INVALID(11454, "Network Fee Is Invalid"),
    MULTIPLE_PAYMENT_PROCESSORS_BINDED_TO_SAME_PATH_VARIABLE(11455, "Multiple payment processors are binded to same path variable."),
    NO_PAYMENT_PROCESSOR_PROCESSING_PAYMENT_CHANNEL(11456, "No payment processor processing this payment channel."),
    PSP_MERCHANT_ACCOUNT_CONFIGS_INVALID(11457, "The settings of merchant account is incorrect."),
    PP_MERCHANT_NOT_ACTIVATED(11458, "The merchant is not activated."),
    PAYMENT_ACCOUNT_IN_NEGATIVE_DATABASE(11459, "Declined - Payment Account in Negative Database"),
    TRANSACTION_TYPE_NOT_SUPPORTED(11460, "Transaction Type Not Supported"),
    PRE_AUTH_TRANSACTION_STATUS_INVALID(11461, "Authorization transaction status invalid"),
    PRE_AUTH_TRANSACTION_REF_ID_INVALID(11462, "Authorization transaction reference ID invalid"),
    INVALID_SIGNATURE(11463, "Invalid Signature"),
    INVALID_ACTUAL_AMOUNT(11464, "Invalid actual amount"),
    PAYMENT_CHANNEL_BIN_DECLINE(11465, "No payment providers available for this transaction due to BIN routing configuration"),
    PSP_BIN_FORCE_DECLINE(11466, "Declined due to BIN routing configuration error"),
    PSP_BIN_BLOCK_DECLINE(11467, "No payment providers available for this transaction due to BIN routing configuration"),
    NO_PSP_AVAILABLE_FOR_BANK(11468, "No payment providers available for this transaction due to bank is unsupported"),
    PAYMENT_CHANNEL_AND_CARD_NUMBER_REQUIRED(11469, "Payment channel requires card number"),
    PAYMENT_CHANNEL_AND_CARD_TYPE_NOT_MATCHED(11470, "Payment channel & card type not matched"),
    INVALID_OPERATOR(11471, "Invalid operator"),
    TRANSACTION_ALREADY_SUBMITTED_TO_PSP(11472, "Already submitted to PSP"),
    PSP_TRANSACTION_DETAILS_NOT_FOUND(11473, "PSP transaction details not found"),
    PSP_TRANSACTION_DETAILS_INVALID(11474, "PSP transaction details is invalid"),
    CVS_CUSTOMER_INFO_NOT_FOUND(11475, "Customer information for CVS is not found"),
    PAYMENT_ACCOUNT_NOT_FOUND(11476, "Payment Account Not Found"),
    PAYMENT_ACCOUNT_NOT_REGISTERED(11477, "Payment Account Identifier not registered (unknown) at the provider"),
    MISSING_CLIENT_VERIFICATION(11478, "Missing client verification monitor alert.");

    private final int code;
    private final String message;

    CommonPINErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
