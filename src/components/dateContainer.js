import { connect } from "react-redux";
import _ from "lodash";

import Appointment from "../components/appointmentComponent";
import {
  DateDataContainer,
  DateContainer,
  DateApointmentContainer,
} from "../styledComponent/index";

function DateComponent(props) {
  const appointment = _.orderBy(props.userData, ["time"], ["asc"]).map(
    (data) => (
      <Appointment
        p1={data.data.p1}
        p2={data.data.p2}
        p3={data.data.p3}
        p4={data.data.p4}
        Task={data.data.Task}
        Time={data.data.Time}
      />
    )
  );

  return (
    <DateDataContainer>
      <DateContainer>{props.date}</DateContainer>
      <DateApointmentContainer>{appointment}</DateApointmentContainer>
    </DateDataContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  var date = ownProps.date + "-" + ownProps.month + "-" + ownProps.year;
  var userData = state.appointment.filter((data) => data.date === date);
  return {
    userData: userData,
  };
};

export default connect(mapStateToProps)(DateComponent);
