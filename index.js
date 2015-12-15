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
        'curl_easy_unescape'    : [ 'CString', [ ptr.CURL, 'CString', 'int', ptr.int ] ],
        // CURLFORMcode curl_formadd(struct curl_httppost ** firstitem, struct curl_httppost ** lastitem, ...);
        // void curl_formfree(struct curl_httppost * form);
        'curl_formfree'         : [ 'void', [ ptr.curl_httppost ] ],
        // int curl_formget(struct curl_httppost * form, void *userp, curl_formget_callback append );
        'curl_formget'          : [ 'int', [ ptr.curl_httppost, ptr.void, ptr.curl_callback ] ],
        // void curl_free( char * ptr );
        'curl_free'             : [ 'void', [ 'CString' ] ],
        // time_t curl_getdate(char * datestring , time_t *now );
        'curl_getdate'          : [ typedef.time_t, [ 'CString', ptr.time_t ] ],
        // void curl_global_cleanup(void);
        'curl_global_cleanup'   : [ 'void', [] ],
        // CURLcode curl_global_init(long flags );
        'curl_global_init'      : [ typedef.CURLcode, [ typedef.long ] ],
        // CURLcode curl_global_init_mem(long  flags,
        //             curl_malloc_callback m,
        //             curl_free_callback f,
        //             curl_realloc_callback r,
        //             curl_strdup_callback s,
        //             curl_calloc_callback c );
        'curl_global_init_mem'  : [ typedef.CURLcode, [ typedef.long, ptr.curl_callback, ptr.curl_callback,
                                                      ptr.curl_callback, ptr.curl_callback, ptr.curl_callback] ],
        // CURLMcode curl_multi_add_handle(CURLM *multi_handle, CURL *easy_handle);
        // CURLMcode curl_multi_assign(CURLM *multi_handle, curl_socket_t sockfd,   void *sockptr);
        // CURLMcode curl_multi_cleanup( CURLM *multi_handle );
        // CURLMcode curl_multi_fdset(CURLM *multi_handle,
        //                   fd_set *read_fd_set,
        //                   fd_set *write_fd_set,
        //                   fd_set *exc_fd_set,
        //                   int *max_fd);
        // CURLMsg *curl_multi_info_read( CURLM *multi_handle,   int *msgs_in_queue);
        // CURLM *curl_multi_init( );
        // CURLMcode curl_multi_perform(CURLM *multi_handle, int *running_handles);
        // CURLMcode curl_multi_remove_handle(CURLM *multi_handle, CURL *easy_handle);
        // CURLMcode curl_multi_setopt(CURLM * multi_handle, CURLMoption option, param);
        // CURLMcode curl_multi_socket_action(CURLM * multi_handle,
        //                           curl_socket_t sockfd, int ev_bitmask,
        //                           int *running_handles);
        // const char *curl_multi_strerror(CURLMcode  errornum );
        // CURLMcode curl_multi_timeout(CURLM *multi_handle, long *timeout);
        // CURLMcode curl_multi_wait(CURLM *multi_handle,
        //                  struct curl_waitfd extra_fds[],
        //                  unsigned int extra_nfds,
        //                  int timeout_ms,
        //                  int *numfds);
        // CURLSHcode curl_share_cleanup(CURLSH * share_handle );
        // CURLSH *curl_share_init( );
        // CURLSHcode curl_share_setopt(CURLSH *share, CURLSHoption option, parameter);
        // const char *curl_share_strerror(CURLSHcode  errornum );
        // struct curl_slist *curl_slist_append(struct curl_slist * list, const char * string );
        // void curl_slist_free_all(struct curl_slist * list);
        // char *curl_version( );
        'curl_version'     : [ 'CString', [] ],
        // curl_version_info_data *curl_version_info( CURLversion type );
        'curl_version_info'    : [ ptr.curl_version_info_data, [ types.CURLversion ] ]
        //'curl_version_info'    : [ ptr.curl_version_info_data, [ Ref.types.int ] ]

      } );

//console.log( "Start" );
//
//var cURL = libcurl.curl_easy_init();
//libcurl.curl_easy_setopt( cURL, 2, "http://www.google.com/");
//var res = libcurl.curl_easy_perform( cURL );
//console.dir( res.unref() );
//
//console.log( "Finish" );

