// https://www.terraform.io/docs/providers/consul/r/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/license#datacenter License#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/license#id License#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/license#license License#license}
  */
  readonly license: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/license consul_license}
*/
export class License extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/license consul_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_license',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
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
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._license = config.license;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
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

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return this.getListAttribute('features');
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

  // installation_id - computed: true, optional: false, required: false
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }

  // issue_time - computed: true, optional: false, required: false
  public get issueTime() {
    return this.getStringAttribute('issue_time');
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // license_id - computed: true, optional: false, required: false
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getListAttribute('warnings');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      license: cdktf.stringToTerraform(this._license),
    };
  }
}
