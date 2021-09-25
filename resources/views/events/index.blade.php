@extends('layouts.app')

@section('scripts')

    <link href='https://cdn.jsdelivr.net/npm/fullcalendar@5.7.2/main.min.css' rel='stylesheet' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.7.2/main.min.js'></script>

    <script>
        const url_events = " {{ url('/eventos/show') }}";
        const url_show = "{{ url('/eventos') }}";
    </script>
    <script src="{{ asset('js/main.js') }}" defer></script>

@endsection

@section('content')
    <!-- <div class="row">
        <div class="col"></div>
        <div class="col col-7">
            <div id="calendar">Calendario ...</div>
        </div>
        <div class="col"></div>
    </div> -->

    <!-- Modal -->
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Event</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="d-none">
                        <label for="">Id</label>
                        <input type="text" name="txtId" id="txtId">
                    </div>

                    <div class="d-none">
                        <label for="">Fecha</label>
                        <input type="date" name="txtDate" id="txtDate">
                    </div>


                    <div class="form-row">
                        <div class="form-group col-md-8">
                            <label for="">Titulo</label>
                            <input type="text" class="form-control" name="txtTitle" id="txtTitle">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="">Hora</label>
                            <input type="time" min="07:00" max="22:00" step="600" class="form-control" name="txtTime" id="txtTime">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">Descripcion</label>
                            <textarea name="txtDescription" class="form-control" id="txtDescription"
                                    cols="30" rows="5"></textarea>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">Color</label>
                            <input type="color" class="form-control" name="txtColor" id="txtColor">
                        </div>

                    </div>



                </div>
                <div class="modal-footer">

                    <button id="btnPost" class="btn btn-success" >Agregar</button>
                    <button id="btnUpdate" class="btn btn-warning ">Modificar</button>
                    <button id="btnDelete" class="btn btn-danger">Borrar</button>
                    <button id="btnCancel" data-dismiss="modal" class="btn btn-info">Cancelar</button>
{{--                    <button id="btnCancel" data-toggle="modal" data-target="#modal1" class="btn btn-info">Cancelar</button>--}}

                </div>
            </div>
        </div>
    </div>
    <div id="calendar"></div>
    </div>
@endsection




