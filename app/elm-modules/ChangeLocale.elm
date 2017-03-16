port module ChangeLocale exposing (main)

import Html exposing (Html, button, ul, text)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)

main : Program Flags Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }

-- MODEL

type alias Model =
    { language : String
    }


model : Model
model =
  { language = "" }

type alias Flags =
    { language : String
    }


-- FLAGS


init : Flags -> ( Model, Cmd Msg )
init flags =
    Model flags.language ! []



-- COMMANDS

port changeLocale : String -> Cmd msg


-- UPDATE


type Msg = ChangeEnglish | ChangeSpanish | Default


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeEnglish ->
          ({ model | language = "EN" }
          , changeLocale "EN"
          )
        ChangeSpanish ->
          ({ model | language = "ES" }
          , changeLocale "ES"
          )
        Default ->
          (model
          , changeLocale "ES"
          )


-- VIEW


view : Model -> Html Msg
view model =
  ul [ class "mg-change-locale-buttons" ]
    [ button
      [ onClick ChangeEnglish
      , class "btn btn-small waves-effect waves-light purple darken-2 mg-level-button"
      ]
      [ text "English" ]
    , button
      [ onClick ChangeSpanish
      , class "btn btn-small waves-effect waves-light purple darken-2 mg-level-button"
      ]
      [ text "Spanish" ]
    ]
