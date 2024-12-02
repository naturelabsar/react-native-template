enum UserType {
  Admin = 'admin',
  Host = 'host',
  Traveller = 'traveller', 
} 

// TODO: Create a basic npm package to get compatibility of blood.
enum BloodType {
  APlus = 'a+',
  AMinus = 'a-',
  BPlus = 'b+',
  BMinus = 'b-',
  ZeroPlus = '0+',
  ZeroMinus = '0-',
}

enum MotorcycleBrands {
  BMW = 'bmw',
  KTM = 'ktm',
  Honda = 'honda',
  Yamaha = 'yamaha',
  Kawasaki = 'kawasaki',
  Suzuki = 'suzuki',
  Benelli = 'benelli',
  Ducati = 'ducati',
  CFMoto = 'cfmoto',
  Other = 'other',
}

enum CountryTypes {
  Argentina = 'argentina',
  Brasil = 'brasil',
  Chile = 'chile',
  Bolivia = 'bolivia',
  Peru = 'peru',
  Paraguay = 'paraguay',
  Ecuador = 'ecuador',
  Colombia = 'colombia',
  Venezuela = 'venezuela',
  Other = 'other'
  // TODO: Complete list
}

type MotorcycleType = {
  brand: MotorcycleBrands,
  year: number;
  model: string;
  engineSize: number;
  engineCode: string;
  //chasis: string;
  country: CountryTypes;
  dateBought?: Date; // in case that is needed. When the traveller is not same country.
  // owner/rented
}

enum RelationshipType {
  Couple = 'couple',
  Parent = 'parent',
  Sibling = 'sibling',
  Friend = 'friend',
  Other = 'other',
}


type EmergencyContactType = {
  name: string;
  phone: number;
  relationship: RelationshipType;
}

type SecurityBodyGearType = {
  boots: boolean;
  motorcyclePants: boolean;
  motorcycleJacket: boolean;
  globes: boolean;
  glasses: boolean;
  helmetType: string;
}

enum EmergencyType {
  Urgent = 'urgent',
  MotorcycleBreak = 'motorcycleBreak',
}

type SecurityGearType = {
  gps: boolean;
  vhf: boolean;
  starlink: boolean; // hacer promocion para alquilarlo rented
  bodyGear: SecurityBodyGearType;
  tent: boolean;
  sleepingBag: boolean;
  stove: boolean;
  powerBank: boolean;
  extraTires : boolean;
  // TODO: Cosas de Botiquin, inflador / clavos/parches
}

type UserConnectedType = {
  id: number;
  name: string;
  userType?: UserType;
}

type HostedByType = UserConnectedType[];

type Review = {
  points: number;
  description: string;
}
type Reviews = Review[];

type RegistrationDangerRoadType = {
  start: Date;
  end: Date;
  extraInformation?: string;
  active: boolean;
}
type RegistrationDangerRoadTypes = RegistrationDangerRoadType[];

type Users = {
  id: number;
  name: string;
  lastName: string;
  username: string;
  userType: UserType; // Se podria tener que poner en modo viaje tambien o que haya una piramide de privilegios
  phone: number;
  country: CountryTypes;
  countryBorn?: CountryTypes
  birthday: Date;
  blood: BloodType;
  recommendedBy: UserConnectedType; // Vincularlo con otro usuario.
  motorcycle: MotorcycleType;
  userPhoto: File;
  motorcyclePhoto: File;
  emergencyContact: EmergencyContactType;
  securityGear: SecurityGearType;
  alergies: string;
  extraInformation: string;
  paid: boolean;
  hostedBy: HostedByType;
  reviews: Reviews
  RegistrationDangerRoads: RegistrationDangerRoadTypes;
  crossingDangerRoad: boolean; // Lo tiene que activar el, en principio no es automatico con las fechas de registro
  // review de la travesia hecha. estado, etc
}

