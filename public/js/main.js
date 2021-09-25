
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            // themeSystem: 'bootstrap',
        headerToolbar: {
            // left: 'dayGridMonth,timeGridWeek,timeGridDay',
            left: 'dayGridMonth,timeGridDay',
            // center: 'title',
            // right: 'prev, next, today, myButton',

            
        },


        dateClick: function(info) {
            cleanForm();

            document.getElementById('txtDate').value = info.dateStr;
            document.getElementById('btnPost').disabled = false;
            document.getElementById('btnUpdate').disabled = true;
            document.getElementById('btnDelete').disabled = true;

            $('#modal1').modal();
        },

        eventClick: function (info){
            $('#modal1').modal();


            document.getElementById('btnPost').disabled = true;
            document.getElementById('btnUpdate').disabled = false;
            document.getElementById('btnDelete').disabled = false;

            document.getElementById('txtId').value =info.event.id;
            let newMonth= info.event.start.getMonth()+1;
            let newDay = info.event.start.getDate();
            let hour = info.event.start.getHours()
            let minutes = info.event.start.getMinutes()
            let newDate = `${(info.event.start.getFullYear())}-${ (newMonth < 10 ? "0" + newMonth : newMonth)}-${(newDay<10 ? "0" + newDay : newDay)}`
            let newTime = `${(hour < 10 ? "0" + hour : hour)}:${(minutes < 10 ? "0" + minutes : minutes)}`

            document.getElementById('txtDate').value = newDate;
            document.getElementById('txtTime').value = newTime;
            document.getElementById('txtTitle').value =info.event.title;
            document.getElementById('txtColor').value =info.event.backgroundColor;
            document.getElementById('txtDescription').value =info.event.extendedProps.description;
        },
            editable: true,
            eventDrop: function (info) {
                document.getElementById('txtId').value = info.event.id;
                document.getElementById('txtTitle').value =info.event.title;
                document.getElementById('txtColor').value =info.event.backgroundColor;
                document.getElementById('txtDescription').value =info.event.extendedProps.description;

                let newMonth= info.event.start.getMonth()+1;
                let newDay = info.event.start.getDate();
                let hour = info.event.start.getHours()
                let minutes = info.event.start.getMinutes()
                let newDate = `${(info.event.start.getFullYear())}-${ (newMonth < 10 ? "0" + newMonth : newMonth)}-${(newDay<10 ? "0" + newDay : newDay)}`
                let newTime = `${(hour < 10 ? "0" + hour : hour)}:${(minutes < 10 ? "0" + minutes : minutes)}`

                document.getElementById('txtDate').value = newDate;
                document.getElementById('txtTime').value = newTime;

                eventObj =  getData('PATCH');
                let value = document.getElementById('txtId').value;
                sendData(`/${value}`, eventObj, true);

            },


            customButtons: {
                myButton: {
                text: 'Alert!',
                    click: function() {
                    $('#modal1').modal('toggle');
                    }
                }
            },

            events: url_events ,


            // initialDate: '2021-05-21',
            // initialView: 'dayGridMonth'
            initialView: 'timeGridDay'
            
        });

        calendar.setOption('locale', 'es');
        calendar.render();

        $('#btnPost').click(function () {
            eventObj =  getData('POST');
            sendData('', eventObj);
        });

        $('#btnUpdate').click(function () {
            eventObj =  getData('PATCH');
            let value = document.getElementById('txtId').value;
            sendData(`/${value}`, eventObj);
        });

        $('#btnDelete').click(function () {
            eventObj =  getData('DELETE');
            let value = document.getElementById('txtId').value;
            sendData(`/${value}`, eventObj);
        });

        function getData(method) {

            newEvent = {
                id: document.getElementById('txtId').value,
                title: document.getElementById('txtTitle').value,
                description: document.getElementById('txtDescription').value,
                backgroundColor: document.getElementById('txtColor').value,
                textColor: '#FFFFFF',
                start: `${document.getElementById('txtDate').value} ${document.getElementById('txtTime').value}`,
                end: `${document.getElementById('txtDate').value} ${document.getElementById('txtTime').value}`,
                '_token': $("meta[name='csrf-token']").attr("content"),
                '_method': method,
            }

            return(newEvent);
        }

        function sendData(action, eventObject){

            axios.post(url_show+action,eventObject)
                .then(res =>{
                    $('#modal1').modal('hide')
                    calendar.refetchEvents()
                })
                .catch(err => alert('error ' + err))
        }

        function cleanForm(){
            document.getElementById('txtId').value = '';
            document.getElementById('txtDate').value = '';
            document.getElementById('txtTime').value = '10:30';
            document.getElementById('txtTitle').value = '';
            document.getElementById('txtColor').value = '';
            document.getElementById('txtDescription').value = '';
        }

    });