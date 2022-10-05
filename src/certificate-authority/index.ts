// https://www.terraform.io/docs/providers/consul/r/certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/certificate_authority#config CertificateAuthority#config}
  */
  readonly config: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/certificate_authority#connect_provider CertificateAuthority#connect_provider}
  */
  readonly connectProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/certificate_authority#id CertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/certificate_authority consul_certificate_authority}
*/
export class CertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/certificate_authority consul_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.16.2',
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
    this._config = config.config;
    this._connectProvider = config.connectProvider;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // connect_provider - computed: false, optional: false, required: true
  private _connectProvider?: string; 
  public get connectProvider() {
    return this.getStringAttribute('connect_provider');
  }
  public set connectProvider(value: string) {
    this._connectProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectProviderInput() {
    return this._connectProvider;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      connect_provider: cdktf.stringToTerraform(this._connectProvider),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
