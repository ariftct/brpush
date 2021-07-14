function sendPushMessage() {

    var receiverToken = document.getElementById("push_ReceiverToken").value;
    var key = 'AAAAypO-Df4:APA91bGYKSEL-CIydsM2flx5Yj374VgI1ye7oy6NImDRRcUjeAQAHcutRnVtBifxdm4B54kckz1MvNMpKhTHYKCRwi6AckrcHyK0RDZVoTuBtWWpfnf1mBehs78vb0Yhlrmv-5iaZO3s'; // Server API key

    var endUsersList = [];
    endUsersList.push(receiverToken);

    var title = document.getElementById("push_Title");
    var message = document.getElementById("push_Message");

    // Generate Notification Content
    var notification = {
        'title': title.value,
        'body': message.value,
        'icon': 'notification-icon.png',
        'click_action': 'http://www.toyotabharat.com/'
    };


    //This function to sends push notification to users
    for (var i = 0; i <= endUsersList.length - 1; i++)
    {
    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'key=' + key,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'notification': notification,
            'to': endUsersList[i]
        })
    }).then(function (response) {
      //  console.log(response);
    }).catch(function (error) {
       // console.error(error);
    })
}

}
