var FFI     = require( 'ffi' ),
    Ref     = require( 'ref' ),
    types   = require( './lib/types' ),
    typedef = types.typedef,
    ptr     = types.ptr,
    libcurl = FFI.Library( 'libcurl', {
            // void curl_easy_cleanup(CURL * handle );
            'curl_easy_cleanup'     : [ 'void', [ ptr.CURL ] ],
            // CURL *curl_easy_duphandle(CURL *handle );
            'curl_easy_duphandle'   : [ ptr.CURL, [ ptr.CURL ] ],
            // char *curl_easy_escape( CURL * curl , const char * string , int length );
            'curl_easy_escape'      : [ 'CString', [ ptr.CURL, 'CString', 'int' ] ],
            // CURLcode curl_easy_getinfo(CURL *curl, CURLINFO info, ... );
            'curl_easy_getinfo'     : [ typedef.CURLcode, [ ptr.CURL, typedef.CURLINFO ] ],
            // CURL *curl_easy_init( );
            'curl_easy_init'        : [ ptr.CURL, [] ],
            // CURLcode curl_easy_pause(CURL *handle , int bitmask );
            'curl_easy_pause'       : [ typedef.CURLcode, [ ptr.CURL, 'int' ] ],
            // CURLcode curl_easy_perform(CURL * easy_handle );
            'curl_easy_perform'     : [ typedef.CURLcode, [ ptr.CURL ] ],
            // CURLcode curl_easy_recv( CURL * curl , void * buffer , size_t buflen , size_t * n );
            'curl_easy_recv'        : [ typedef.CURLcode, [ ptr.CURL, ptr.void, 'size_t', ptr.size_t ] ],
            // void curl_easy_reset(CURL *handle );
            'curl_easy_reset'       : [ 'void', [ ptr.CURL ] ],
            // CURLcode curl_easy_send( CURL * curl , const void * buffer , size_t buflen , size_t * n );
            'curl_easy_send'        : [ typedef.CURLcode, [ ptr.CURL, ptr.void, 'size_t', ptr.size_t ] ],
            // CURLcode curl_easy_setopt(CURL *handle, CURLoption option, parameter);
            'curl_easy_setopt'      : [ typedef.CURLcode, [ ptr.CURL, typedef.CURLoption, 'void' ] ],
            // const char *curl_easy_strerror(CURLcode errornum);
            'curl_easy_strerror'    : [ 'CString', [ typedef.CURLcode ] ],
            // char *curl_easy_unescape( CURL * curl , const char * url , int inlength , int * outlength );
            'curl_easy_unescape'    : [ 'CString', [ ptr.CURL, 'CString', 'int', ptr.int ] ]
        } );