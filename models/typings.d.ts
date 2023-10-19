interface IGeneric {
  alarm?: number;
  lockout?: number;
  comp_name?: string;
  value?: number;
  voltage?: number;
  pumpPercentage?: number;
  pumpStat?: string;
}

interface IConductivity {
  comp_name?: string;
  value?: number;
  tdsValue?: number;
  cycleNumberValue?: number;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
}

interface ICurrentOutputs {
  comp_name?: string;
  value?: number;
  alarm?: number;
}

interface IInhibitor {
  comp_name?: string;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
}

interface IDispersant {
  comp_name?: string;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
}

interface IBoardTemperature {
  comp_name?: string;
  value?: number;
  output_current?: number;
  alarm?: number;
}

interface IFacCtrl {
  alarm?: number;
  lockout?: number;
  comp_name?: string;
  value?: number;
  voltage?: number;
  pumpPercentage?: number;
  pumpStat?: string;
}

interface IPh {
  lockout?: number;
  comp_name?: string;
  value?: number;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
}

interface IWaterUsageMeter {
  pulse1Min?: number;
  volume1Minute?: number;
  volume30Minute?: number;
  monthToDate?: number;
  comp_name?: string;
  value?: number;
  yearToDate?: number;
  alarm?: number;
  pulse30Min?: number;
}

interface IOutputs {
  comp_name?: string;
  outputPercBitMask?: number;
  outputControlBitMask?: number;
  alarm?: number;
}

interface ITemperature {
  comp_name?: string;
  value?: number;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
}

interface IInlineDosing {
  comp_name?: string;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
  value?: number;
}

interface IORP {
  comp_name?: string;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
  value?: number;
  lockout?: number;
}

interface IFlow {
  comp_name?: string;
  pumpPercentage?: number;
  pumpStat?: string;
  alarm?: number;
  value?: number;
  isOn?: number;
}
