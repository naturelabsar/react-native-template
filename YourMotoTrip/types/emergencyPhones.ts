enum GlobalEmergencyType {
  Fireman = 'fireman',
  Police = 'police',
  Health = 'health',
  Other = 'other',
}

type EmergencyPhone = {
  name: GlobalEmergencyType;
  phone: number;
}

type EmergencyPhones = EmergencyPhone[];