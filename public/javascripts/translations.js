I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"add_failed":"Add word failed!","admin":{"categories":{"edit":{"edit_category":"Edit category","update":"Update"},"form":{"category_description":"Category description:","category_name":"Category name:"},"index":{"delete":"Delete","edit":"Edit","next":"Next","previous":"Previous","start_learn":"Start Learn","welcome":"Welcome to THT E-Learning system","you_sure":"Are you sure?"},"new":{"category_description":"Category description:","category_name":"Category name:","create":"Create","create_new_category":"Create new category"}},"lessons":{"edit":{"delete":"Delete","edit":"Edit","edit_lesson":"Edit lesson","name_lesson":"Lesson name"},"index":{"categories":"Categories","delete":"Delete","edit":"Edit","new_lesson":"Add new lesson","word_list":"Word list","you_sure":"You sure?"},"new":{"category":"Select category","name_lesson":"Lesson name","new_lesson":"New lesson"},"show":{"submit":"Submit"}},"users":{"index":{"avatar":"Avatar","delete":"Delete","email":"Email","user_name":"User Name","users":"All Users","you_sure":"You sure?"}},"words":{"answer_form":{"answer":"Answer","btn_remove":"Remove","correct":"Correct answer"},"edit":{"edit_word":"Edit word","update":"Update"},"form":{"btn_new_answer":"Add answer","word_description":"Word description:","word_name":"Word name:","word_question":"Word question:"},"index":{"add_word":"Add word","alphabet":"Alphabet","delete":"Delete","edit":"Edit","search":"Search","word_groups":"Word groups","word_list":"Word List","words":"Words","you_sure":"You sure?"},"new":{"add":"Add","add_word":"Add word","category":"Category","lesson":"Lesson:","word_description":"Word description:","word_name":"Word name:","word_question":"Word question:"}}},"categories":{"index":{"next":"Next","previous":"Previous","start_learn":"Start Learn","welcome":"Welcome to THT E-Learning system"}},"category_created":"Category created!","category_delete_failed":"Delete failed","category_deleted":"Category deleted!","category_update_failed":"Update failed","category_updated":"Category updated!","check_expiration":"Password reset has expired.","create_failed":"Create failed!","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"delete_lesson_failed":"Lesson delete failed!","e_learning":{"alert":{"warning_1":"Please choose correct answer!","warning_2":"Selected only one correct answer!"}},"email_blank":"Can't be empty","errors":{"array?":"must be an array","attr?":"is missing","bool?":"must be boolean","connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","date?":"must be a date","date_time?":"must be a date time","decimal?":"must be a decimal","empty?":"must be empty","eql?":"must be equal to %{left}","even?":"must be even","excluded_from?":{"arg":{"default":"must not be one of: %{list}","range":"must not be one of: %{list_left} - %{list_right}"}},"excludes?":"must not include %{value}","exclusion?":"must not be one of: %{list}","false?":"must be false","filled?":"must be filled","float?":"must be a float","format":"%{attribute} %{message}","format?":"is in invalid format","gt?":"must be greater than %{num}","gteq?":"must be greater than or equal to %{num}","hash?":"must be a hash","included_in?":{"arg":{"default":"must be one of: %{list}","range":"must be one of: %{list_left} - %{list_right}"}},"includes?":"must include %{value}","inclusion?":"must be one of: %{list}","int?":"must be an integer","key?":"is missing","lt?":"must be less than %{num}","lteq?":"must be less than or equal to %{num}","max_size?":"size cannot be greater than %{num}","messages":{"accepted":"must be accepted","blank":"can't be blank","confirmation":"doesn't match %{attribute}","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"min_size?":"size cannot be less than %{num}","none?":"cannot be defined","not_eql?":"must not be equal to %{left}","number?":"must be a number","odd?":"must be odd","or":"or","size?":{"arg":{"default":"size must be %{size}","range":"size must be within %{size_left} - %{size_right}"},"value":{"string":{"arg":{"default":"length must be %{size}","range":"length must be within %{size_left} - %{size_right}"}}}},"str?":"must be a string","time?":"must be a time","true?":"must be true","type?":"must be %{type}","unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"exam_complete":"Exam complete","exam_error":"An error occurred while doing lesson","helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"layouts":{"header":{"admin":"Admin","advance":"Advance","basic":"Basic","course":"Course","home":"Home","intermediate":"Intermediate","log_in":"Log in","log_out":"Log out","register":"Register","search":"Search..","user_list":"User list"}},"lesson_create":"Lesson created!","lesson_create_fail":"Lesson create failed!","lesson_deleted":"Lesson deleted successfully!","lessons":{"index":{"categories":"Categories","word_list":"Word list"},"show":{"submit":"Submit"}},"login_failed":"Invalid email/password combination!","login_success":"Welcome to THT E-Learning!","login_warning":"Please log in!","logout_success":"You are logged out!","models":{"user":{"avatar":"Should be less than 5MB"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"password_resets":{"edit":{"password":"New password","password_confirm":"Password confirmation","reset_password":"Reset password","update":"Update password"},"new":{"email_ph":"Enter your email","forgot_password":"Forgot password","submit":"Send email"}},"profile_updated":"Profile updated","register_failed":"Register failed!","register_success":"Register success!","reset_success":"Password has been reset.","sent_email_success":"Email sent with password reset instructions","sent_error":"Email address not found","sessions":{"new":{"forgot_password":"Forgot password?","log_in":"Log in","password":"Password","password_ph_login":"Enter your password","register":"Register","remember":"Remember me","user_name":"User name","username_ph_login":"Enter your name"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"update_lesson":"Lesson updated successfully!","update_lesson_failed":"Lesson update failed!","user_deleted":"User deleted","users":{"edit":{"edit_user":"Edit user","save_changes":"Save changes","update_your_profile":"Update your profile"},"form":{"confirmation":"Confirmation","email":"Email","password":"Password","user_name":"User Name"},"index":{"avatar":"Avatar","delete":"Delete","email":"Email","user_name":"User Name","users":"All Users","you_sure":"Are you sure?"},"new":{"email_ph":"Enter user email","password":"Password","password_confirm":"Password Confirmation","password_confirm_ph":"Enter password confirmation","password_ph":"Enter user password","register":"Register","user_name":"User name","username_ph":"Enter user name"},"show":{"content":"Nothing to show","follow":"Follow","following":"people following","setting":" Account settings"}},"will_paginate":{"next_label":"Next \u0026#8594;","page_entries_info":{"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} \u003cb\u003e%{from}\u0026nbsp;-\u0026nbsp;%{to}\u003c/b\u003e of \u003cb\u003e%{count}\u003c/b\u003e in total","single_page":{"one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}","zero":"No %{model} found"},"single_page_html":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{model}","other":"Displaying \u003cb\u003eall\u0026nbsp;%{count}\u003c/b\u003e %{model}","zero":"No %{model} found"}},"page_gap":"\u0026hellip;","previous_label":"\u0026#8592; Previous"},"word_added":"Word added!","word_delete_failed":"Delete word failed!","word_deleted":"Word deleted!","word_update_failed":"Word update failed!","word_updated":"Word updated!","words":{"index":{"alphabet":"Alphabet","search":"Search","word_groups":"Word groups","word_list":"Word List","words":"Words"}}});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {"add_failed":"Thêm từ thất bại!","admin":{"categories":{"edit":{"edit_category":"Chỉnh sửa khóa học","update":"Cập nhật"},"form":{"category_description":"Mô tả khóa học:","category_name":"Tên khóa học:"},"index":{"delete":"Xóa","edit":"Sửa","next":"Sau","previous":"Trước","start_learn":"Bắt đầu học","welcome":"Chào mừng bạn đến với lớp học trực tuyến THT!","you_sure":"Bạn đã chắc chắn?"},"new":{"category_description":"Mô tả khóa học:","category_name":"Tên khóa học:","create":"Tạo","create_new_category":"Tạo khóa học mới"}},"lessons":{"edit":{"delete":"Delete","edit":"Edit","edit_lesson":"Edit lesson","name_lesson":"Lesson name"},"index":{"categories":"Categories","delete":"Xóa","edit":"Sửa","new_lesson":"Add new lesson","word_list":"Danh sách từ","you_sure":"Bạn đã chắc chắn?"},"new":{"category":"Select category","name_lesson":"Lesson name","new_lesson":"New lesson"}},"users":{"index":{"avatar":"Avatar","delete":"Delete","email":"Email","user_name":"User Name","users":"All Users","you_sure":"You sure?"}},"words":{"edit":{"edit_word":"Sửa từ","update":"Cập nhật"},"form":{"word_description":"Mô tả từ:","word_name":"Tên từ:","word_question":"Câu hỏi cho từ:"},"index":{"add_word":"Thêm từ","alphabet":"Bảng chữ cái","delete":"Xóa","edit":"Sửa","search":"Tìm kiếm","word_groups":"Nhóm từ","word_list":"Danh sách từ","words":"Từ","you_sure":"Bạn đã chắc chắn?"},"new":{"add":"Thêm","add_word":"Thêm từ","lesson":"Bài học:","word_description":"Mô tả từ:","word_name":"Tên từ:","word_question":"Câu hỏi cho từ:"}}},"categories":{"index":{"next":"Sau","previous":"Trước","start_learn":"Bắt đầu học","welcome":"Chào mừng bạn đến với lớp học trực tuyến THT!"}},"category_created":"Tạo khóa học thành công!","category_delete_failed":"Xóa thất bại","category_deleted":"Xóa khóa học thành công!","category_update_failed":"Cập nhật thất bại","category_updated":"Cập nhật khóa học thành công!","check_expiration":"Đường dẫn tạo lại email đã hết hạn.","create_failed":"Tạo khóa học thất bại!","delete_lesson_failed":"Xóa bài học thất bại!","email_blank":"Nhập email để tiếp tục.","exam_complete":"Bạn đã hoàn thành bài kiểm tra","exam_error":"Đã có lỗi xảy ra trong quá trình làm bài kiểm tra","layouts":{"header":{"admin":"Admin","advance":"Khóa học từ vựng nâng cao","basic":"Khóa học từ vựng cơ bản","course":"Khóa học","home":"Trang chủ","intermediate":"Khóa học từ vựng trung cấp","log_in":"Đăng nhập","log_out":"Đăng xuất","register":"Đăng ký","search":"Tìm kiếm..","user_list":"Danh sách người dùng"}},"lesson_create":"Tạo bài học thành công!","lesson_create_fail":"Đã có lỗi xảy ra khi tạo bài học mới!","lesson_deleted":"Xóa bài học thành công!","lessons":{"index":{"categories":"Các khóa học","word_list":"Danh sách từ"},"show":{"submit":"Submit"}},"login_failed":"Mật khẩu hoặc email không hợp lệ!","login_success":"Chào mừng bạn đến với lớp học trực tuyến THT!","login_warning":"Đăng nhập để tiếp tục.","logout_success":"Đăng xuất thành công!","models":{"user":{"avatar":"Dung lượng ảnh đại diện không được quá 5MB"}},"password_resets":{"edit":{"password":"Mật khẩu mới","password_confirm":"Xác nhận mật khẩu","reset_password":"Tạo lại mật khẩu","update":"Cập nhật mật khẩu"},"new":{"email_ph":"Nhập email của bạn","forgot_password":"Quên mật khẩu?","submit":"Gửi email"}},"profile_updated":"Hồ sơ cập nhật thành công!","register_failed":"Đăng ký thất bại!","register_success":"Đăng ký thành công!","reset_success":"Password đã được tạo mới thành công!","sent_email_success":"Email đã được gửi thành công. Hãy kiểm tra email của bạn!","sent_error":"Không tìm thấy địa chỉ emai","sessions":{"new":{"forgot_password":"Quên mật khẩu?","log_in":"Đăng nhập","password":"Mật khẩu","password_ph_login":"Nhập mật khẩu","register":"Đăng ký","remember":"Ghi nhớ lần đăng nhập này trên máy tính","user_name":"Tên người dùng","username_ph_login":"Nhập tên người dùng"}},"update_lesson":"Cập nhật bài học thành công!","update_lesson_failed":"Cập nhật bài học thất bại!","user_deleted":"Xóa người dùng thành công","users":{"edit":{"edit_user":"Sửa thông tin người dùng","save_changes":"Lưu các thay đổi","update_your_profile":"Cập nhật hồ sơ của bạn"},"form":{"confirmation":"Xác nhận","email":"Email","password":"Mật khẩu","user_name":"Tên người dùng"},"index":{"avatar":"Ảnh đại diện","delete":"Xóa người dùng","email":"Email","user_name":"Tên người dùng","users":"Danh sách người dùng","you_sure":"Bạn đã chắc chắn?"},"new":{"email_ph":"Nhập email người dùng","password":"Mật khẩu","password_confirm":"Xác nhận mật khẩu","password_confirm_ph":"Nhập lại mật khẩu","password_ph":"Nhập mật khẩu","register":"Đăng ký","user_name":"Tên người dùng","username_ph":"Nhập tên người dùng"},"show":{"content":"Không có hoạt động nào để hiển thị","follow":"Theo dõi","following":"người đang theo dõi","setting":" Thiết lập tài khoản"}},"word_added":"Thêm từ thành công!","word_delete_failed":"Xóa từ thất bại!","word_deleted":"Xóa từ thành công!","word_update_failed":"Cập nhật từ thất bại!","word_updated":"Từ được cập nhật thành công!","words":{"index":{"alphabet":"Bảng chữ cái","search":"Tìm kiếm","word_groups":"Nhóm từ","word_list":"Danh sách từ","words":"Từ"}}});
