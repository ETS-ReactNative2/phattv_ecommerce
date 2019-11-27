export const routes = {
  Home: 'Home',
  Details: 'Details',
  Modal: 'Modal',
};

export const uriPrefix = 'phattv_ecommerce'; // to handle deep_link

export const reduxStoreId = 'root';

// TODO: read from env variable
export const BASE_URL = 'http://localhost:3001';

// UI constants
const spacingUnit = 10;
export const styleConstants = {
  border: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: spacingUnit / 2,
  },
  spacing: spacingUnit,
  paddingTop: {
    paddingTop: spacingUnit,
  },
  paddingRight: {
    paddingRight: spacingUnit,
  },
  fonts: {
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    headerNotBold: {
      fontSize: 20,
    },
    headerTwo: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
};
