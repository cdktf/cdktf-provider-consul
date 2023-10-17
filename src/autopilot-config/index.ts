// https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutopilotConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}
  */
  readonly cleanupDeadServers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}
  */
  readonly disableUpgradeMigration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#id AutopilotConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}
  */
  readonly lastContactThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}
  */
  readonly maxTrailingLogs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}
  */
  readonly redundancyZoneTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}
  */
  readonly serverStabilizationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}
  */
  readonly upgradeVersionTag?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config consul_autopilot_config}
*/
export class AutopilotConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_autopilot_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutopilotConfig to import
  * @param importFromId The id of the existing AutopilotConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutopilotConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_autopilot_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/resources/autopilot_config consul_autopilot_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutopilotConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AutopilotConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'consul_autopilot_config',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.18.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanupDeadServers = config.cleanupDeadServers;
    this._datacenter = config.datacenter;
    this._disableUpgradeMigration = config.disableUpgradeMigration;
    this._id = config.id;
    this._lastContactThreshold = config.lastContactThreshold;
    this._maxTrailingLogs = config.maxTrailingLogs;
    this._redundancyZoneTag = config.redundancyZoneTag;
    this._serverStabilizationTime = config.serverStabilizationTime;
    this._upgradeVersionTag = config.upgradeVersionTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_dead_servers - computed: false, optional: true, required: false
  private _cleanupDeadServers?: boolean | cdktf.IResolvable; 
  public get cleanupDeadServers() {
    return this.getBooleanAttribute('cleanup_dead_servers');
  }
  public set cleanupDeadServers(value: boolean | cdktf.IResolvable) {
    this._cleanupDeadServers = value;
  }
  public resetCleanupDeadServers() {
    this._cleanupDeadServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupDeadServersInput() {
    return this._cleanupDeadServers;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // disable_upgrade_migration - computed: false, optional: true, required: false
  private _disableUpgradeMigration?: boolean | cdktf.IResolvable; 
  public get disableUpgradeMigration() {
    return this.getBooleanAttribute('disable_upgrade_migration');
  }
  public set disableUpgradeMigration(value: boolean | cdktf.IResolvable) {
    this._disableUpgradeMigration = value;
  }
  public resetDisableUpgradeMigration() {
    this._disableUpgradeMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeMigrationInput() {
    return this._disableUpgradeMigration;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_contact_threshold - computed: false, optional: true, required: false
  private _lastContactThreshold?: string; 
  public get lastContactThreshold() {
    return this.getStringAttribute('last_contact_threshold');
  }
  public set lastContactThreshold(value: string) {
    this._lastContactThreshold = value;
  }
  public resetLastContactThreshold() {
    this._lastContactThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastContactThresholdInput() {
    return this._lastContactThreshold;
  }

  // max_trailing_logs - computed: false, optional: true, required: false
  private _maxTrailingLogs?: number; 
  public get maxTrailingLogs() {
    return this.getNumberAttribute('max_trailing_logs');
  }
  public set maxTrailingLogs(value: number) {
    this._maxTrailingLogs = value;
  }
  public resetMaxTrailingLogs() {
    this._maxTrailingLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrailingLogsInput() {
    return this._maxTrailingLogs;
  }

  // redundancy_zone_tag - computed: false, optional: true, required: false
  private _redundancyZoneTag?: string; 
  public get redundancyZoneTag() {
    return this.getStringAttribute('redundancy_zone_tag');
  }
  public set redundancyZoneTag(value: string) {
    this._redundancyZoneTag = value;
  }
  public resetRedundancyZoneTag() {
    this._redundancyZoneTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyZoneTagInput() {
    return this._redundancyZoneTag;
  }

  // server_stabilization_time - computed: false, optional: true, required: false
  private _serverStabilizationTime?: string; 
  public get serverStabilizationTime() {
    return this.getStringAttribute('server_stabilization_time');
  }
  public set serverStabilizationTime(value: string) {
    this._serverStabilizationTime = value;
  }
  public resetServerStabilizationTime() {
    this._serverStabilizationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStabilizationTimeInput() {
    return this._serverStabilizationTime;
  }

  // upgrade_version_tag - computed: false, optional: true, required: false
  private _upgradeVersionTag?: string; 
  public get upgradeVersionTag() {
    return this.getStringAttribute('upgrade_version_tag');
  }
  public set upgradeVersionTag(value: string) {
    this._upgradeVersionTag = value;
  }
  public resetUpgradeVersionTag() {
    this._upgradeVersionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeVersionTagInput() {
    return this._upgradeVersionTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cleanup_dead_servers: cdktf.booleanToTerraform(this._cleanupDeadServers),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      disable_upgrade_migration: cdktf.booleanToTerraform(this._disableUpgradeMigration),
      id: cdktf.stringToTerraform(this._id),
      last_contact_threshold: cdktf.stringToTerraform(this._lastContactThreshold),
      max_trailing_logs: cdktf.numberToTerraform(this._maxTrailingLogs),
      redundancy_zone_tag: cdktf.stringToTerraform(this._redundancyZoneTag),
      server_stabilization_time: cdktf.stringToTerraform(this._serverStabilizationTime),
      upgrade_version_tag: cdktf.stringToTerraform(this._upgradeVersionTag),
    };
  }
}
