window.addEventListener("load", function() {
    function DLProgress(e) {
        document.getElementById("ScrOverlay").style.display = "block";
        var Percent = Math.round((e.loaded / e.total) * 100);
        document.getElementById("cacheUPDtxt").innerHTML =
            "Installing Offline Cache: " + Percent + "%";
        document.getElementById("CacheBar").style.width = Percent + "%";
    }

    function DisplayCacheProgress() {
        setTimeout(function() {
            document.getElementById("cacheUPDtxt").innerHTML =
                "Page Cached successfully, reloading....";
        }, 1000);
    }
    window.applicationCache.addEventListener(
        "progress",
        function(e) {
            DLProgress(e);
        },
        false
    );
    window.applicationCache.addEventListener("cached", DisplayCacheProgress);
    window.applicationCache.addEventListener("updateready", DisplayCacheProgress);
    window.applicationCache.addEventListener("error", function() {
        document.getElementById("cacheUPDtxt").innerHTML = "Error Installing Cache";
    });
    var dt = new Date();
    document.getElementById("date").innerHTML =
        dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    setInterval(() => {
        var hrs = dt.getHours();
        var min = dt.getMinutes();
        document.getElementById("clock").innerHTML =
            (hrs < 10 ? "0" + hrs : hrs) + ":" + (min < 10 ? "0" + min : min);
    }, 0);
    if (localStorage.passcount == null) localStorage.passcount = 0;
    if (localStorage.failcount == null) localStorage.failcount = 0;
    document.getElementById("showsyscalls").textContent +=
        ("aio_init_addr=" + aio_init_addr + "\r\n") +
        ("fpathconf_addr=" + fpathconf_addr + "\r\n") +
        ("dmem_container_addr=" + dmem_container_addr + "\r\n") +
        ("evf_clear_addr=" + evf_clear_addr + "\r\n") +
        ("kqueue_addr=" + kqueue_addr + "\r\n") +
        ("kevent_addr=" + kevent_addr + "\r\n") +
        ("futimes_addr=" + futimes_addr + "\r\n") +
        ("open_addr=" + open_addr + "\r\n") +
        ("thr_self_addr=" + thr_self_addr + "\r\n") +
        ("mkdir_addr=" + mkdir_addr + "\r\n") +
        ("pipe_addr=" + pipe_addr + "\r\n") +
        ("stat_addr=" + stat_addr + "\r\n") +
        ("write_addr=" + write_addr + "\r\n") +
        ("evf_cancel_addr=" + evf_cancel_addr + "\r\n") +
        ("ktimer_delete_addr=" + ktimer_delete_addr + "\r\n") +
        ("setregid_addr=" + setregid_addr + "\r\n") +
        ("jitshm_create_addr=" + jitshm_create_addr + "\r\n") +
        ("sigwait_addr=" + sigwait_addr + "\r\n") +
        ("fdatasync_addr=" + fdatasync_addr + "\r\n") +
        ("sigtimedwait_addr=" + sigtimedwait_addr + "\r\n") +
        ("get_gpo_addr=" + get_gpo_addr + "\r\n") +
        ("sched_setscheduler_addr=" + sched_setscheduler_addr + "\r\n") +
        ("osem_open_addr=" + osem_open_addr + "\r\n") +
        ("dynlib_get_info_addr=" + dynlib_get_info_addr + "\r\n") +
        ("osem_post_addr=" + osem_post_addr + "\r\n") +
        ("blockpool_move_addr=" + blockpool_move_addr + "\r\n") +
        ("issetugid_addr=" + issetugid_addr + "\r\n") +
        ("getdents_addr=" + getdents_addr + "\r\n") +
        ("rtprio_thread_addr=" + rtprio_thread_addr + "\r\n") +
        ("evf_delete_addr=" + evf_delete_addr + "\r\n") +
        ("_umtx_op_addr=" + _umtx_op_addr + "\r\n") +
        ("access_addr=" + access_addr + "\r\n") +
        ("reboot_addr=" + reboot_addr + "\r\n") +
        ("sigaltstack_addr=" + sigaltstack_addr + "\r\n") +
        ("getcontext_addr=" + getcontext_addr + "\r\n") +
        ("munmap_addr=" + munmap_addr + "\r\n") +
        ("setuid_addr=" + setuid_addr + "\r\n") +
        ("evf_trywait_addr=" + evf_trywait_addr + "\r\n") +
        ("setcontext_addr=" + setcontext_addr + "\r\n") +
        ("dynlib_get_list_addr=" + dynlib_get_list_addr + "\r\n") +
        ("setsid_addr=" + setsid_addr + "\r\n") +
        ("fstatfs_addr=" + fstatfs_addr + "\r\n") +
        ("aio_multi_wait_addr=" + aio_multi_wait_addr + "\r\n") +
        ("accept_addr=" + accept_addr + "\r\n") +
        ("set_phys_fmem_limit_addr=" + set_phys_fmem_limit_addr + "\r\n") +
        ("thr_get_name_addr=" + thr_get_name_addr + "\r\n") +
        ("get_page_table_stats_addr=" + get_page_table_stats_addr + "\r\n") +
        ("sigsuspend_addr=" + sigsuspend_addr + "\r\n") +
        ("truncate_addr=" + truncate_addr + "\r\n") +
        ("fsync_addr=" + fsync_addr + "\r\n") +
        ("execve_addr=" + execve_addr + "\r\n") +
        ("evf_open_addr=" + evf_open_addr + "\r\n") +
        ("netabort_addr=" + netabort_addr + "\r\n") +
        ("blockpool_unmap_addr=" + blockpool_unmap_addr + "\r\n") +
        ("osem_create_addr=" + osem_create_addr + "\r\n") +
        ("getlogin_addr=" + getlogin_addr + "\r\n") +
        ("mincore_addr=" + mincore_addr + "\r\n") +
        ("shutdown_addr=" + shutdown_addr + "\r\n") +
        ("profil_addr=" + profil_addr + "\r\n") +
        ("preadv_addr=" + preadv_addr + "\r\n") +
        ("geteuid_addr=" + geteuid_addr + "\r\n") +
        ("set_chicken_switches_addr=" + set_chicken_switches_addr + "\r\n") +
        ("sigqueue_addr=" + sigqueue_addr + "\r\n") +
        ("aio_multi_poll_addr=" + aio_multi_poll_addr + "\r\n") +
        ("get_self_auth_info_addr=" + get_self_auth_info_addr + "\r\n") +
        ("opmc_enable_addr=" + opmc_enable_addr + "\r\n") +
        ("aio_multi_delete_addr=" + aio_multi_delete_addr + "\r\n") +
        ("rfork_addr=" + rfork_addr + "\r\n") +
        ("sys_exit_addr=" + sys_exit_addr + "\r\n") +
        ("blockpool_batch_addr=" + blockpool_batch_addr + "\r\n") +
        ("sigpending_addr=" + sigpending_addr + "\r\n") +
        ("ktimer_gettime_addr=" + ktimer_gettime_addr + "\r\n") +
        ("opmc_set_ctr_addr=" + opmc_set_ctr_addr + "\r\n") +
        ("ksem_wait_addr=" + ksem_wait_addr + "\r\n") +
        ("sched_getparam_addr=" + sched_getparam_addr + "\r\n") +
        ("swapcontext_addr=" + swapcontext_addr + "\r\n") +
        ("opmc_get_ctr_addr=" + opmc_get_ctr_addr + "\r\n") +
        ("budget_get_ptype_addr=" + budget_get_ptype_addr + "\r\n") +
        ("msync_addr=" + msync_addr + "\r\n") +
        ("sigwaitinfo_addr=" + sigwaitinfo_addr + "\r\n") +
        ("lstat_addr=" + lstat_addr + "\r\n") +
        ("test_debug_rwmem_addr=" + test_debug_rwmem_addr + "\r\n") +
        ("evf_create_addr=" + evf_create_addr + "\r\n") +
        ("madvise_addr=" + madvise_addr + "\r\n") +
        ("cpuset_getaffinity_addr=" + cpuset_getaffinity_addr + "\r\n") +
        ("evf_set_addr=" + evf_set_addr + "\r\n") +
        ("setlogin_addr=" + setlogin_addr + "\r\n") +
        ("ksem_init_addr=" + ksem_init_addr + "\r\n") +
        ("opmc_disable_addr=" + opmc_disable_addr + "\r\n") +
        ("namedobj_delete_addr=" + namedobj_delete_addr + "\r\n") +
        ("gettimeofday_addr=" + gettimeofday_addr + "\r\n") +
        ("read_addr=" + read_addr + "\r\n") +
        ("thr_get_ucontext_addr=" + thr_get_ucontext_addr + "\r\n") +
        ("batch_map_addr=" + batch_map_addr + "\r\n") +
        ("sysarch_addr=" + sysarch_addr + "\r\n") +
        ("utc_to_localtime_addr=" + utc_to_localtime_addr + "\r\n") +
        ("evf_close_addr=" + evf_close_addr + "\r\n") +
        ("setrlimit_addr=" + setrlimit_addr + "\r\n") +
        ("getpeername_addr=" + getpeername_addr + "\r\n") +
        ("aio_get_data_addr=" + aio_get_data_addr + "\r\n") +
        ("lseek_addr=" + lseek_addr + "\r\n") +
        ("connect_addr=" + connect_addr + "\r\n") +
        ("recvfrom_addr=" + recvfrom_addr + "\r\n") +
        ("getrlimit_addr=" + getrlimit_addr + "\r\n") +
        ("dynlib_get_info_for_libdbg_addr=" + dynlib_get_info_for_libdbg_addr + "\r\n") +
        ("thr_suspend_ucontext_addr=" + thr_suspend_ucontext_addr + "\r\n") +
        ("_umtx_op_addr=" + _umtx_op_addr + "\r\n") +
        ("kill_addr=" + kill_addr + "\r\n") +
        ("dynlib_process_needed_and_relocate_addr=" + dynlib_process_needed_and_relocate_addr + "\r\n") +
        ("getsockname_addr=" + getsockname_addr + "\r\n") +
        ("osem_trywait_addr=" + osem_trywait_addr + "\r\n") +
        ("execve_addr=" + execve_addr + "\r\n") +
        ("flock_addr=" + flock_addr + "\r\n") +
        ("sigreturn_addr=" + sigreturn_addr + "\r\n") +
        ("query_memory_protection_addr=" + query_memory_protection_addr + "\r\n") +
        ("pwrite_addr=" + pwrite_addr + "\r\n") +
        ("get_map_statistics_addr=" + get_map_statistics_addr + "\r\n") +
        ("ksem_getvalue_addr=" + ksem_getvalue_addr + "\r\n") +
        ("sendfile_addr=" + sendfile_addr + "\r\n") +
        ("socketex_addr=" + socketex_addr + "\r\n") +
        ("unlink_addr=" + unlink_addr + "\r\n") +
        ("thr_resume_ucontext_addr=" + thr_resume_ucontext_addr + "\r\n") +
        ("dl_get_list_addr=" + dl_get_list_addr + "\r\n") +
        ("cpuset_setaffinity_addr=" + cpuset_setaffinity_addr + "\r\n") +
        ("clock_gettime_addr=" + clock_gettime_addr + "\r\n") +
        ("thr_kill2_addr=" + thr_kill2_addr + "\r\n") +
        ("set_timezone_info_addr=" + set_timezone_info_addr + "\r\n") +
        ("select_addr=" + select_addr + "\r\n") +
        ("pselect_addr=" + pselect_addr + "\r\n") +
        ("sync_addr=" + sync_addr + "\r\n") +
        ("socketpair_addr=" + socketpair_addr + "\r\n") +
        ("get_kernel_mem_statistics_addr=" + get_kernel_mem_statistics_addr + "\r\n") +
        ("virtual_query_all_addr=" + virtual_query_all_addr + "\r\n") +
        ("physhm_open_addr=" + physhm_open_addr + "\r\n") +
        ("getuid_addr=" + getuid_addr + "\r\n") +
        ("revoke_addr=" + revoke_addr + "\r\n") +
        ("sigprocmask_addr=" + sigprocmask_addr + "\r\n") +
        ("setegid_addr=" + setegid_addr + "\r\n") +
        ("cpuset_getid_addr=" + cpuset_getid_addr + "\r\n") +
        ("evf_wait_addr=" + evf_wait_addr + "\r\n") +
        ("sched_get_priority_max_addr=" + sched_get_priority_max_addr + "\r\n") +
        ("sigaction_addr=" + sigaction_addr + "\r\n") +
        ("ipmimgr_call_addr=" + ipmimgr_call_addr + "\r\n") +
        ("aio_submit_cmd_addr=" + aio_submit_cmd_addr + "\r\n") +
        ("free_stack_addr=" + free_stack_addr + "\r\n") +
        ("settimeofday_addr=" + settimeofday_addr + "\r\n") +
        ("recvmsg_addr=" + recvmsg_addr + "\r\n") +
        ("aio_submit_addr=" + aio_submit_addr + "\r\n") +
        ("setgroups_addr=" + setgroups_addr + "\r\n") +
        ("aio_multi_cancel_addr=" + aio_multi_cancel_addr + "\r\n") +
        ("nanosleep_addr=" + nanosleep_addr + "\r\n") +
        ("blockpool_map_addr=" + blockpool_map_addr + "\r\n") +
        ("thr_create_addr=" + thr_create_addr + "\r\n") +
        ("munlockall_addr=" + munlockall_addr + "\r\n") +
        ("dynlib_get_info_ex_addr=" + dynlib_get_info_ex_addr + "\r\n") +
        ("pwritev_addr=" + pwritev_addr + "\r\n") +
        ("mname_addr=" + mname_addr + "\r\n") +
        ("regmgr_call_addr=" + regmgr_call_addr + "\r\n") +
        ("getgroups_addr=" + getgroups_addr + "\r\n") +
        ("osem_close_addr=" + osem_close_addr + "\r\n") +
        ("osem_delete_addr=" + osem_delete_addr + "\r\n") +
        ("dynlib_get_obj_member_addr=" + dynlib_get_obj_member_addr + "\r\n") +
        ("debug_init_addr=" + debug_init_addr + "\r\n") +
        ("mmap_dmem_addr=" + mmap_dmem_addr + "\r\n") +
        ("kldunloadf_addr=" + kldunloadf_addr + "\r\n") +
        ("mprotect_addr=" + mprotect_addr + "\r\n") +
        ("ksem_trywait_addr=" + ksem_trywait_addr + "\r\n") +
        ("ksem_close_addr=" + ksem_close_addr + "\r\n") +
        ("sched_rr_get_interval_addr=" + sched_rr_get_interval_addr + "\r\n") +
        ("getitimer_addr=" + getitimer_addr + "\r\n") +
        ("getpid_addr=" + getpid_addr + "\r\n") +
        ("netgetsockinfo_addr=" + netgetsockinfo_addr + "\r\n") +
        ("get_cpu_usage_all_addr=" + get_cpu_usage_all_addr + "\r\n") +
        ("eport_delete_addr=" + eport_delete_addr + "\r\n") +
        ("randomized_path_addr=" + randomized_path_addr + "\r\n") +
        ("jitshm_alias_addr=" + jitshm_alias_addr + "\r\n") +
        ("seteuid_addr=" + seteuid_addr + "\r\n") +
        ("set_uevt_addr=" + set_uevt_addr + "\r\n") +
        ("clock_getres_addr=" + clock_getres_addr + "\r\n") +
        ("setitimer_addr=" + setitimer_addr + "\r\n") +
        ("thr_exit_addr=" + thr_exit_addr + "\r\n") +
        ("sandbox_path_addr=" + sandbox_path_addr + "\r\n") +
        ("thr_kill_addr=" + thr_kill_addr + "\r\n") +
        ("sys_exit_addr=" + sys_exit_addr + "\r\n") +
        ("dup2_addr=" + dup2_addr + "\r\n") +
        ("utimes_addr=" + utimes_addr + "\r\n") +
        ("pread_addr=" + pread_addr + "\r\n") +
        ("dl_get_info_addr=" + dl_get_info_addr + "\r\n") +
        ("ktimer_settime_addr=" + ktimer_settime_addr + "\r\n") +
        ("sched_setparam_addr=" + sched_setparam_addr + "\r\n") +
        ("aio_create_addr=" + aio_create_addr + "\r\n") +
        ("osem_wait_addr=" + osem_wait_addr + "\r\n") +
        ("dynlib_get_list_for_libdbg_addr=" + dynlib_get_list_for_libdbg_addr + "\r\n") +
        ("get_proc_type_info_addr=" + get_proc_type_info_addr + "\r\n") +
        ("getgid_addr=" + getgid_addr + "\r\n") +
        ("fstat_addr=" + fstat_addr + "\r\n") +
        ("fork_addr=" + fork_addr + "\r\n") +
        ("namedobj_create_addr=" + namedobj_create_addr + "\r\n") +
        ("opmc_set_ctl_addr=" + opmc_set_ctl_addr + "\r\n") +
        ("get_resident_count_addr=" + get_resident_count_addr + "\r\n") +
        ("getdirentries_addr=" + getdirentries_addr + "\r\n") +
        ("getrusage_addr=" + getrusage_addr + "\r\n") +
        ("setreuid_addr=" + setreuid_addr + "\r\n") +
        ("wait4_addr=" + wait4_addr + "\r\n") +
        ("__sysctl_addr=" + __sysctl_addr + "\r\n") +
        ("bind_addr=" + bind_addr + "\r\n") +
        ("sched_yield_addr=" + sched_yield_addr + "\r\n") +
        ("dl_get_metadata_addr=" + dl_get_metadata_addr + "\r\n") +
        ("get_resident_fmem_count_addr=" + get_resident_fmem_count_addr + "\r\n") +
        ("setsockopt_addr=" + setsockopt_addr + "\r\n") +
        ("dynlib_load_prx_addr=" + dynlib_load_prx_addr + "\r\n") +
        ("getpriority_addr=" + getpriority_addr + "\r\n") +
        ("get_phys_page_size_addr=" + get_phys_page_size_addr + "\r\n") +
        ("opmc_set_hw_addr=" + opmc_set_hw_addr + "\r\n") +
        ("dynlib_do_copy_relocations_addr=" + dynlib_do_copy_relocations_addr + "\r\n") +
        ("netcontrol_addr=" + netcontrol_addr + "\r\n") +
        ("ksem_post_addr=" + ksem_post_addr + "\r\n") +
        ("netgetiflist_addr=" + netgetiflist_addr + "\r\n") +
        ("chmod_addr=" + chmod_addr + "\r\n") +
        ("aio_suspend_addr=" + aio_suspend_addr + "\r\n") +
        ("ksem_timedwait_addr=" + ksem_timedwait_addr + "\r\n") +
        ("dynlib_dlsym_addr=" + dynlib_dlsym_addr + "\r\n") +
        ("get_paging_stats_of_all_objects_addr=" + get_paging_stats_of_all_objects_addr + "\r\n") +
        ("osem_cancel_addr=" + osem_cancel_addr + "\r\n") +
        ("writev_addr=" + writev_addr + "\r\n") +
        ("ktimer_getoverrun_addr=" + ktimer_getoverrun_addr + "\r\n") +
        ("rmdir_addr=" + rmdir_addr + "\r\n") +
        ("sched_get_priority_min_addr=" + sched_get_priority_min_addr + "\r\n") +
        ("dynlib_unload_prx_addr=" + dynlib_unload_prx_addr + "\r\n") +
        ("thr_set_name_addr=" + thr_set_name_addr + "\r\n") +
        ("mlockall_addr=" + mlockall_addr + "\r\n") +
        ("openat_addr=" + openat_addr + "\r\n") +
        ("eport_open_addr=" + eport_open_addr + "\r\n") +
        ("sigprocmask_addr=" + sigprocmask_addr + "\r\n") +
        ("chdir_addr=" + chdir_addr + "\r\n") +
        ("physhm_unlink_addr=" + physhm_unlink_addr + "\r\n") +
        ("mtypeprotect_addr=" + mtypeprotect_addr + "\r\n") +
        ("thr_wake_addr=" + thr_wake_addr + "\r\n") +
        ("blockpool_open_addr=" + blockpool_open_addr + "\r\n") +
        ("thr_new_addr=" + thr_new_addr + "\r\n") +
        ("munlock_addr=" + munlock_addr + "\r\n") +
        ("fchflags_addr=" + fchflags_addr + "\r\n") +
        ("ftruncate_addr=" + ftruncate_addr + "\r\n") +
        ("rename_addr=" + rename_addr + "\r\n") +
        ("poll_addr=" + poll_addr + "\r\n") +
        ("eport_trigger_addr=" + eport_trigger_addr + "\r\n") +
        ("getsid_addr=" + getsid_addr + "\r\n") +
        ("virtual_query_addr=" + virtual_query_addr + "\r\n") +
        ("fchmod_addr=" + fchmod_addr + "\r\n") +
        ("_umtx_unlock_addr=" + _umtx_unlock_addr + "\r\n") +
        ("mmap_addr=" + mmap_addr + "\r\n") +
        ("ktimer_create_addr=" + ktimer_create_addr + "\r\n") +
        ("dup_addr=" + dup_addr + "\r\n") +
        ("sendmsg_addr=" + sendmsg_addr + "\r\n") +
        ("close_addr=" + close_addr + "\r\n") +
        ("is_development_mode_addr=" + is_development_mode_addr + "\r\n") +
        ("getegid_addr=" + getegid_addr + "\r\n") +
        ("get_vm_map_timestamp_addr=" + get_vm_map_timestamp_addr + "\r\n") +
        ("dynlib_get_proc_param_addr=" + dynlib_get_proc_param_addr + "\r\n") +
        ("fcntl_addr=" + fcntl_addr + "\r\n") +
        ("getppid_addr=" + getppid_addr + "\r\n") +
        ("readv_addr=" + readv_addr + "\r\n") +
        ("rdup_addr=" + rdup_addr + "\r\n") +
        ("listen_addr=" + listen_addr + "\r\n") +
        ("app_state_change_addr=" + app_state_change_addr + "\r\n") +
        ("set_gpo_addr=" + set_gpo_addr + "\r\n") +
        ("ksem_unlink_addr=" + ksem_unlink_addr + "\r\n") +
        ("get_cpu_usage_proc_addr=" + get_cpu_usage_proc_addr + "\r\n") +
        ("shm_unlink_addr=" + shm_unlink_addr + "\r\n") +
        ("reserve_2mb_page_addr=" + reserve_2mb_page_addr + "\r\n") +
        ("dynlib_get_info2_addr=" + dynlib_get_info2_addr + "\r\n") +
        ("mlock_addr=" + mlock_addr + "\r\n") +
        ("workaround8849_addr=" + workaround8849_addr + "\r\n") +
        ("get_sdk_compiled_version_addr=" + get_sdk_compiled_version_addr + "\r\n") +
        ("clock_settime_addr=" + clock_settime_addr + "\r\n") +
        ("ksem_destroy_addr=" + ksem_destroy_addr + "\r\n") +
        ("ksem_open_addr=" + ksem_open_addr + "\r\n") +
        ("thr_set_ucontext_addr=" + thr_set_ucontext_addr + "\r\n") +
        ("get_bio_usage_all_addr=" + get_bio_usage_all_addr + "\r\n") +
        ("getdtablesize_addr=" + getdtablesize_addr + "\r\n") +
        ("chflags_addr=" + chflags_addr + "\r\n") +
        ("shm_open_addr=" + shm_open_addr + "\r\n") +
        ("eport_close_addr=" + eport_close_addr + "\r\n") +
        ("dynlib_get_list2_addr=" + dynlib_get_list2_addr + "\r\n") +
        ("socketclose_addr=" + socketclose_addr + "\r\n") +
        ("sched_getscheduler_addr=" + sched_getscheduler_addr + "\r\n") +
        ("pathconf_addr=" + pathconf_addr + "\r\n") +
        ("localtime_to_utc_addr=" + localtime_to_utc_addr + "\r\n") +
        ("setpriority_addr=" + setpriority_addr + "\r\n") +
        ("cpumode_yield_addr=" + cpumode_yield_addr + "\r\n") +
        ("process_terminate_addr=" + process_terminate_addr + "\r\n") +
        ("ioctl_addr=" + ioctl_addr + "\r\n") +
        ("opmc_get_hw_addr=" + opmc_get_hw_addr + "\r\n") +
        ("eport_create_addr=" + eport_create_addr + "\r\n") +
        ("socket_addr=" + socket_addr + "\r\n") +
        ("_umtx_lock_addr=" + _umtx_lock_addr + "\r\n") +
        ("thr_suspend_addr=" + thr_suspend_addr + "\r\n") +
        ("is_in_sandbox_addr=" + is_in_sandbox_addr + "\r\n") +
        ("get_authinfo_addr=" + get_authinfo_addr + "\r\n") +
        ("mdbg_service_addr=" + mdbg_service_addr + "\r\n") +
        ("getsockopt_addr=" + getsockopt_addr + "\r\n") +
        ("get_paging_stats_of_all_threads_addr=" + get_paging_stats_of_all_threads_addr + "\r\n") +
        ("adjtime_addr=" + adjtime_addr + "\r\n") +
        ("kqueueex_addr=" + kqueueex_addr + "\r\n") +
        ("uuidgen_addr=" + uuidgen_addr + "\r\n") +
        ("set_vm_container_addr=" + set_vm_container_addr + "\r\n") +
        ("sendto_addr=" + sendto_addr + "\r\n") +
        ("webkit_base=" + webkit_base + "\r\n") +
        ("libkernel_base= " + libkernel_base + "\r\n") +
        ("libc_base= " + libc_base + "\r\n") +
        ("saveall_addr= " + saveall_addr + "\r\n") +
        ("loadall_addr= " + loadall_addr + "\r\n") +
        ("setjmp_addr= " + setjmp_addr + "\r\n") +
        ("longjmp_addr= " + longjmp_addr + "\r\n") +
        ("pivot_addr= " + pivot_addr + "\r\n") +
        ("infloop_addr= " + infloop_addr + "\r\n") +
        ("jop_frame_addr= " + jop_frame_addr + "\r\n") +
        ("get_errno_addr_addr= " + get_errno_addr_addr + "\r\n") +
        ("pthread_create_addr= " + pthread_create_addr + "\r\n");
});

document.getElementById("passCounter").innerHTML = localStorage.passcount;
document.getElementById("failCounter").innerHTML = localStorage.failcount;
document.querySelectorAll("[data-myinfo]").forEach((e) => {
    e.addEventListener("mouseover", function() {
        document.getElementById("msgs2").innerHTML = e.getAttribute("data-myinfo");
    });
    e.addEventListener("mouseout", function() {
        document.getElementById("msgs2").innerHTML = "status";
    });
});

function load_hen(x) {
    PLfile = "BinFiles/" + x;
    msgs2.innerHTML = "Jailbreaking please wait";
    LoadedMSG = "Payload Loaded";
    setTimeout(function() {
        var script = document.createElement("script");
        script.src = "common/exp_loader.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    }, 3000);
    setTimeout(jailbreak, 500);
}

function load_Pl(x) {
    PLfile = "BinFiles/" + x;
    msgs2.innerHTML = "Payload loading... please wait";
    LoadedMSG = "Payload Loaded";
    var script = document.createElement("script");
    script.src = "common/pls_loader.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}
var current = false;
var elm = document.getElementById("logarea"),
    closebtn = document.getElementById("closelogs"),
    showbtn = document.getElementById("showbtn");

function showlogs() {
    current = !current;
    elm.style.display = current ? "block" : "none";
    showbtn.style.display = current ? "none" : "block";
    document.getElementById("mainarea").style.display = current ?
        "none" :
        "block";
}
closebtn.addEventListener("click", showlogs);
showbtn.addEventListener("click", showlogs);
const toastLiveExample = document.getElementById("liveToast");
const toast = new bootstrap.Toast(toastLiveExample);
toast.show();