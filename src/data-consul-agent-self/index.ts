// https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/agent_self
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConsulAgentSelfConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/agent_self consul_agent_self}
*/
export class DataConsulAgentSelf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_agent_self";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConsulAgentSelf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConsulAgentSelf to import
  * @param importFromId The id of the existing DataConsulAgentSelf that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/agent_self#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConsulAgentSelf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_agent_self", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/agent_self consul_agent_self} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConsulAgentSelfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataConsulAgentSelfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'consul_agent_self',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.20.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_datacenter - computed: true, optional: false, required: false
  public get aclDatacenter() {
    return this.getStringAttribute('acl_datacenter');
  }

  // acl_default_policy - computed: true, optional: false, required: false
  public get aclDefaultPolicy() {
    return this.getStringAttribute('acl_default_policy');
  }

  // acl_disabled_ttl - computed: true, optional: false, required: false
  public get aclDisabledTtl() {
    return this.getStringAttribute('acl_disabled_ttl');
  }

  // acl_down_policy - computed: true, optional: false, required: false
  public get aclDownPolicy() {
    return this.getStringAttribute('acl_down_policy');
  }

  // acl_enforce_0_8_semantics - computed: true, optional: false, required: false
  public get aclEnforce08Semantics() {
    return this.getBooleanAttribute('acl_enforce_0_8_semantics');
  }

  // acl_ttl - computed: true, optional: false, required: false
  public get aclTtl() {
    return this.getStringAttribute('acl_ttl');
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new cdktf.StringMap(this, "addresses");
  public get addresses() {
    return this._addresses;
  }

  // advertise_addr - computed: true, optional: false, required: false
  public get advertiseAddr() {
    return this.getStringAttribute('advertise_addr');
  }

  // advertise_addr_wan - computed: true, optional: false, required: false
  public get advertiseAddrWan() {
    return this.getStringAttribute('advertise_addr_wan');
  }

  // advertise_addrs - computed: true, optional: false, required: false
  private _advertiseAddrs = new cdktf.StringMap(this, "advertise_addrs");
  public get advertiseAddrs() {
    return this._advertiseAddrs;
  }

  // atlas_join - computed: true, optional: false, required: false
  public get atlasJoin() {
    return this.getBooleanAttribute('atlas_join');
  }

  // bind_addr - computed: true, optional: false, required: false
  public get bindAddr() {
    return this.getStringAttribute('bind_addr');
  }

  // bootstrap_expect - computed: true, optional: false, required: false
  public get bootstrapExpect() {
    return this.getNumberAttribute('bootstrap_expect');
  }

  // bootstrap_mode - computed: true, optional: false, required: false
  public get bootstrapMode() {
    return this.getBooleanAttribute('bootstrap_mode');
  }

  // check_deregister_interval_min - computed: true, optional: false, required: false
  public get checkDeregisterIntervalMin() {
    return this.getStringAttribute('check_deregister_interval_min');
  }

  // check_reap_interval - computed: true, optional: false, required: false
  public get checkReapInterval() {
    return this.getStringAttribute('check_reap_interval');
  }

  // check_update_interval - computed: true, optional: false, required: false
  public get checkUpdateInterval() {
    return this.getStringAttribute('check_update_interval');
  }

  // client_addr - computed: true, optional: false, required: false
  public get clientAddr() {
    return this.getStringAttribute('client_addr');
  }

  // data_dir - computed: true, optional: false, required: false
  public get dataDir() {
    return this.getStringAttribute('data_dir');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // dev_mode - computed: true, optional: false, required: false
  public get devMode() {
    return this.getBooleanAttribute('dev_mode');
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new cdktf.StringMap(this, "dns");
  public get dns() {
    return this._dns;
  }

  // dns_recursors - computed: true, optional: false, required: false
  public get dnsRecursors() {
    return this.getListAttribute('dns_recursors');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enable_anonymous_signature - computed: true, optional: false, required: false
  public get enableAnonymousSignature() {
    return this.getBooleanAttribute('enable_anonymous_signature');
  }

  // enable_coordinates - computed: true, optional: false, required: false
  public get enableCoordinates() {
    return this.getBooleanAttribute('enable_coordinates');
  }

  // enable_debug - computed: true, optional: false, required: false
  public get enableDebug() {
    return this.getBooleanAttribute('enable_debug');
  }

  // enable_remote_exec - computed: true, optional: false, required: false
  public get enableRemoteExec() {
    return this.getBooleanAttribute('enable_remote_exec');
  }

  // enable_syslog - computed: true, optional: false, required: false
  public get enableSyslog() {
    return this.getBooleanAttribute('enable_syslog');
  }

  // enable_ui - computed: true, optional: false, required: false
  public get enableUi() {
    return this.getBooleanAttribute('enable_ui');
  }

  // enable_update_check - computed: true, optional: false, required: false
  public get enableUpdateCheck() {
    return this.getBooleanAttribute('enable_update_check');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leave_on_int - computed: true, optional: false, required: false
  public get leaveOnInt() {
    return this.getBooleanAttribute('leave_on_int');
  }

  // leave_on_term - computed: true, optional: false, required: false
  public get leaveOnTerm() {
    return this.getBooleanAttribute('leave_on_term');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // performance - computed: true, optional: false, required: false
  private _performance = new cdktf.StringMap(this, "performance");
  public get performance() {
    return this._performance;
  }

  // pid_file - computed: true, optional: false, required: false
  public get pidFile() {
    return this.getStringAttribute('pid_file');
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new cdktf.NumberMap(this, "ports");
  public get ports() {
    return this._ports;
  }

  // protocol_version - computed: true, optional: false, required: false
  public get protocolVersion() {
    return this.getNumberAttribute('protocol_version');
  }

  // reconnect_timeout_lan - computed: true, optional: false, required: false
  public get reconnectTimeoutLan() {
    return this.getStringAttribute('reconnect_timeout_lan');
  }

  // reconnect_timeout_wan - computed: true, optional: false, required: false
  public get reconnectTimeoutWan() {
    return this.getStringAttribute('reconnect_timeout_wan');
  }

  // rejoin_after_leave - computed: true, optional: false, required: false
  public get rejoinAfterLeave() {
    return this.getBooleanAttribute('rejoin_after_leave');
  }

  // retry_join - computed: true, optional: false, required: false
  public get retryJoin() {
    return this.getListAttribute('retry_join');
  }

  // retry_join_ec2 - computed: true, optional: false, required: false
  private _retryJoinEc2 = new cdktf.StringMap(this, "retry_join_ec2");
  public get retryJoinEc2() {
    return this._retryJoinEc2;
  }

  // retry_join_gce - computed: true, optional: false, required: false
  private _retryJoinGce = new cdktf.StringMap(this, "retry_join_gce");
  public get retryJoinGce() {
    return this._retryJoinGce;
  }

  // retry_join_wan - computed: true, optional: false, required: false
  public get retryJoinWan() {
    return this.getListAttribute('retry_join_wan');
  }

  // retry_max_attempts - computed: true, optional: false, required: false
  public get retryMaxAttempts() {
    return this.getNumberAttribute('retry_max_attempts');
  }

  // retry_max_attempts_wan - computed: true, optional: false, required: false
  public get retryMaxAttemptsWan() {
    return this.getNumberAttribute('retry_max_attempts_wan');
  }

  // serf_lan_bind_addr - computed: true, optional: false, required: false
  public get serfLanBindAddr() {
    return this.getStringAttribute('serf_lan_bind_addr');
  }

  // serf_wan_bind_addr - computed: true, optional: false, required: false
  public get serfWanBindAddr() {
    return this.getStringAttribute('serf_wan_bind_addr');
  }

  // server_mode - computed: true, optional: false, required: false
  public get serverMode() {
    return this.getBooleanAttribute('server_mode');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // session_ttl_min - computed: true, optional: false, required: false
  public get sessionTtlMin() {
    return this.getStringAttribute('session_ttl_min');
  }

  // start_join - computed: true, optional: false, required: false
  public get startJoin() {
    return this.getListAttribute('start_join');
  }

  // start_join_wan - computed: true, optional: false, required: false
  public get startJoinWan() {
    return this.getListAttribute('start_join_wan');
  }

  // syslog_facility - computed: true, optional: false, required: false
  public get syslogFacility() {
    return this.getStringAttribute('syslog_facility');
  }

  // tagged_addresses - computed: true, optional: false, required: false
  private _taggedAddresses = new cdktf.StringMap(this, "tagged_addresses");
  public get taggedAddresses() {
    return this._taggedAddresses;
  }

  // telemetry - computed: true, optional: false, required: false
  private _telemetry = new cdktf.StringMap(this, "telemetry");
  public get telemetry() {
    return this._telemetry;
  }

  // tls_ca_file - computed: true, optional: false, required: false
  public get tlsCaFile() {
    return this.getStringAttribute('tls_ca_file');
  }

  // tls_cert_file - computed: true, optional: false, required: false
  public get tlsCertFile() {
    return this.getStringAttribute('tls_cert_file');
  }

  // tls_key_file - computed: true, optional: false, required: false
  public get tlsKeyFile() {
    return this.getStringAttribute('tls_key_file');
  }

  // tls_min_version - computed: true, optional: false, required: false
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }

  // tls_verify_incoming - computed: true, optional: false, required: false
  public get tlsVerifyIncoming() {
    return this.getBooleanAttribute('tls_verify_incoming');
  }

  // tls_verify_outgoing - computed: true, optional: false, required: false
  public get tlsVerifyOutgoing() {
    return this.getBooleanAttribute('tls_verify_outgoing');
  }

  // tls_verify_server_hostname - computed: true, optional: false, required: false
  public get tlsVerifyServerHostname() {
    return this.getBooleanAttribute('tls_verify_server_hostname');
  }

  // translate_wan_addrs - computed: true, optional: false, required: false
  public get translateWanAddrs() {
    return this.getBooleanAttribute('translate_wan_addrs');
  }

  // ui_dir - computed: true, optional: false, required: false
  public get uiDir() {
    return this.getStringAttribute('ui_dir');
  }

  // unix_sockets - computed: true, optional: false, required: false
  private _unixSockets = new cdktf.StringMap(this, "unix_sockets");
  public get unixSockets() {
    return this._unixSockets;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_prerelease - computed: true, optional: false, required: false
  public get versionPrerelease() {
    return this.getStringAttribute('version_prerelease');
  }

  // version_revision - computed: true, optional: false, required: false
  public get versionRevision() {
    return this.getStringAttribute('version_revision');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
